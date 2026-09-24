/* ================================================================
   PORTAFOLIO — Manuel Isaac Camaño Díaz
   Archivo: js/main.js

   ÍNDICE:
   1. Menú hamburguesa (móvil)
   2. Navbar: cambio de estilo al hacer scroll
   3. Animaciones de entrada al hacer scroll
   4. Texto rotatorio en el hero
   5. Año dinámico en el footer
================================================================ */


/* ================================================================
   1. MENÚ HAMBURGUESA
   En móvil, el menú está oculto. Este código lo muestra/oculta
   cuando el usuario toca el botón de las tres rayas.
================================================================ */
(function initMobileMenu() {
  const toggle = document.querySelector('.navbar__toggle');
  const menu   = document.getElementById('navbar-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    /* Bloquear scroll del body mientras el menú está abierto */
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Cerrar el menú al tocar cualquier link */
  menu.querySelectorAll('.navbar__link').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* Cerrar el menú si el usuario toca fuera de él */
  document.addEventListener('click', function (event) {
    const clickAfuera = !menu.contains(event.target) &&
                        !toggle.contains(event.target);
    if (clickAfuera && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}());


/* ================================================================
   2. NAVBAR: CAMBIO DE ESTILO AL HACER SCROLL
   Cuando el usuario baja, la navbar se vuelve más opaca.
   Como las gafas fotocromáticas: se oscurecen solas según el entorno.
================================================================ */
(function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  /* Inyectar el estilo de la navbar al hacer scroll */
  const style = document.createElement('style');
  style.textContent = `
    .navbar--scrolled {
      background-color: rgba(15, 17, 23, 0.96);
      border-bottom-color: #2a3347;
    }
  `;
  document.head.appendChild(style);

  /* Añadir/quitar la clase según la posición del scroll */
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
  }, { passive: true }); /* passive: true mejora el rendimiento */
}());


/* ================================================================
   3. ANIMACIONES DE ENTRADA AL HACER SCROLL
   Los elementos aparecen suavemente cuando el usuario llega a ellos.

   IntersectionObserver es como un vigilante: observa si un elemento
   entró al área visible. Cuando entra, le aplica la animación.
================================================================ */
(function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  /* Elementos que queremos animar al entrar en pantalla */
  const selectores = [
    '.section__eyebrow',
    '.section__title',
    '.section__subtitle',
    '.about__paragraph',
    '.about__facts',
    '.about__stat-card',
    '.skills__category',
    '.project-card',
    '.contact__title',
    '.contact__description',
    '.contact__links'
  ].join(', ');

  const elementos = document.querySelectorAll(selectores);

  const observador = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observador.unobserve(entry.target); /* Animar solo una vez */
      }
    });
  }, { threshold: 0.1 }); /* Se activa cuando el 10% es visible */

  /* Preparar cada elemento: ocultarlo y darle un retraso escalonado */
  elementos.forEach(function (el, index) {
    el.style.opacity = '0';
    /* Máximo 5 niveles de retraso para no hacerlo muy lento */
    el.style.animationDelay = (Math.min(index % 6, 5) * 80) + 'ms';
    observador.observe(el);
  });
}());


/* ================================================================
   4. TEXTO ROTATORIO EN EL HERO
   El rol cambia cada 3 segundos con una animación suave.
   Cuenta más sobre ti sin ocupar espacio extra en la página.
================================================================ */
(function initRoleRotator() {
  const elemento = document.getElementById('role-text');
  if (!elemento) return;

  /* 📝 REEMPLAZA: edita estos textos como quieras */
  const roles = {
    es: [
      'Full Stack Junior',
      'Apasionado por la IA',
      'Entusiasta de la Automatización',
      'Curioso por naturaleza'
    ],
    en: [
      'Junior Full Stack Developer',
      'AI Enthusiast',
      'Automation Enthusiast',
      'Naturally Curious'
    ]
  };

  let indiceActual = 0;
  let idiomaActual = document.documentElement.lang === 'en' ? 'en' : 'es';

  function cambiarTexto() {
    /* Paso 1: desvanecer y subir el texto actual */
    elemento.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    elemento.style.opacity    = '0';
    elemento.style.transform  = 'translateY(-8px)';

    setTimeout(function () {
      /* Paso 2: cambiar al siguiente texto */
      indiceActual        = (indiceActual + 1) % roles.length;
      elemento.textContent = roles[idiomaActual][indiceActual];

      /* Paso 3: posicionar abajo antes de aparecer */
      elemento.style.transform = 'translateY(8px)';

      setTimeout(function () {
        /* Paso 4: aparecer subiendo */
        elemento.style.opacity   = '1';
        elemento.style.transform = 'translateY(0)';
      }, 50);

    }, 300);
  }

  document.addEventListener('languagechange', function (event) {
    idiomaActual = event.detail.language;
    indiceActual = 0;
    elemento.textContent = roles[idiomaActual][indiceActual];
  });

  setInterval(cambiarTexto, 3000);
}());


/* ================================================================
   5. AÑO DINÁMICO EN EL FOOTER
   Se actualiza solo cada año. Sin acordarse de cambiarlo a mano.
================================================================ */
(function initDynamicYear() {
  document.querySelectorAll('.footer__text').forEach(function (el) {
    if (el.textContent.includes('©')) {
      el.textContent = el.textContent.replace(
        /\d{4}/,
        new Date().getFullYear()
      );
    }
  });
}());


/* ================================================================
   6. CAMBIO DE IDIOMA
   Traduce la interfaz completa sin duplicar el contenido HTML.
================================================================ */
(function initLanguageToggle() {
  const toggle = document.getElementById('language-toggle');
  if (!toggle) return;

  const translations = {
    es: {
      title: 'Manuel Isaac Camaño Díaz — Desarrollador Full Stack Junior',
      description: 'Portafolio de Manuel Isaac Camaño Díaz, desarrollador Full Stack Junior con enfoque en automatización, JavaScript y n8n.',
      nav: ['Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'],
      greeting: 'Hola, soy',
      rolePrefix: 'Desarrollador ',
      heroDescription: 'Construyo soluciones que conectan tecnología con problemas reales. Con enfoque en automatización, JavaScript y mucho café. ☕',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      aboutEyebrow: '02 — sobre mí',
      aboutTitle: '¿Quién soy?',
      aboutParagraphs: [
        'Soy un desarrollador de software <strong>Campuslands</strong>, Bucaramanga. Me mueve la curiosidad por entender cómo funcionan las cosas y, sobre todo, cómo mejorarlas usando tecnología.',
        'Disfruto diseñar soluciones a problemas reales con grandes ideas — "si lo puedes imaginar, lo puedes programar" dicen, aplicando mi creatividad y conocimientos pienso facilitar muchas tareas monotonas para los humanos.',
        'Fuera del código, me gusta planear bien antes de ejecutar. Me gusta siempre entender el todo para saber que hacer con sus partes.'
      ],
      facts: ['Bucaramanga, Colombia', 'Campuslands — Desarrollo de Software', 'Disponible para prácticas profesionales'],
      stat: 'repositorios en GitHub',
      skillsEyebrow: '03 — habilidades',
      skillsTitle: 'Tecnologías que uso',
      skillsSubtitle: 'Herramientas con las que he construido proyectos reales.',
      skillCategories: ['Principal', 'Frontend', 'Base de datos', 'Herramientas'],
      projectsEyebrow: '04 — proyectos',
      projectsTitle: 'Lo que he construido',
      projectsSubtitle: 'Proyectos reales, con código real. Sin exagerar.',
      featured: 'Destacado',
      projectDescriptions: [
        'Bot de Telegram para gestión de pedidos de cafetería, construido con n8n y Google Sheets como base de datos. Incluye flujo de pedidos, validación de horarios de atención, manejo de errores y reportes automáticos.',
        'Plataforma bancaria web con gestión de cuentas, transacciones y validaciones. Construida con JavaScript vanilla como proyecto de formación en lógica de negocio y manipulación del DOM.',
        'Diseño frontend completo de una tienda de ropa. Proyecto desarrollado de forma independiente, aplicando HTML y CSS para construir una interfaz responsive y funcional.',
        'proyecto basado en java para el seguimiento del ingreso de personas a un establecimiento cuenta con diferentes de usuario, implementacion de persistencia y un visual de SWING'
      ],
      projectTitles: ['DeliveryBot', 'AcmeBank', 'Tienda de Ropa — Frontend', 'proyecto_SICA'],
      githubLink: 'Ver en GitHub',
      liveDemo: 'Demo en vivo',
      contactEyebrow: '05 — contacto',
      contactTitle: '¿Hablamos?',
      contactDescription: 'Estoy buscando oportunidades de prácticas profesionales o mi primer empleo. Si tienes un proyecto interesante o una vacante, escríbeme — respondo rápido.',
      email: 'Enviar email',
      footerNote: 'Construido con HTML, CSS y JS vanilla',
      toggleLabel: 'Cambiar a inglés',
      toggleText: 'EN',
      language: 'es'
    },
    en: {
      title: 'Manuel Isaac Camaño Díaz — Junior Full Stack Developer',
      description: 'Portfolio of Manuel Isaac Camaño Díaz, a Junior Full Stack Developer focused on automation, JavaScript, and n8n.',
      nav: ['About me', 'Skills', 'Projects', 'Contact'],
      greeting: 'Hi, I am',
      rolePrefix: 'Developer ',
      heroDescription: 'I build solutions that connect technology with real-world problems. Focused on automation, JavaScript, and plenty of coffee. ☕',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      aboutEyebrow: '02 — about me',
      aboutTitle: 'Who am I?',
      aboutParagraphs: [
        'I am a software developer from <strong>Campuslands</strong> in Bucaramanga. I am driven by curiosity to understand how things work and, above all, how to improve them with technology.',
        'I enjoy designing solutions to real problems with big ideas. As they say, "if you can imagine it, you can program it"; I use my creativity and knowledge to make many tedious tasks easier for people.',
        'Outside of code, I like to plan carefully before executing. I always want to understand the whole so I know what to do with its parts.'
      ],
      facts: ['Bucaramanga, Colombia', 'Campuslands — Software Development', 'Available for internships'],
      stat: 'GitHub repositories',
      skillsEyebrow: '03 — skills',
      skillsTitle: 'Technologies I use',
      skillsSubtitle: 'Tools I have used to build real projects.',
      skillCategories: ['Core', 'Frontend', 'Database', 'Tools'],
      projectsEyebrow: '04 — projects',
      projectsTitle: 'What I have built',
      projectsSubtitle: 'Real projects, real code. No exaggeration.',
      featured: 'Featured',
      projectDescriptions: [
        'Telegram bot for managing coffee shop orders, built with n8n and Google Sheets as a database. It includes order flows, business-hours validation, error handling, and automated reports.',
        'Web banking platform with account management, transactions, and validations. Built with vanilla JavaScript as a training project focused on business logic and DOM manipulation.',
        'Complete frontend design for a clothing store. Independently developed with HTML and CSS to build a responsive and functional interface.',
        'Java project for tracking people entering an establishment, with different user roles, persistence, and a Swing interface.'
      ],
      projectTitles: ['DeliveryBot', 'AcmeBank', 'Clothing Store — Frontend', 'SICA Project'],
      githubLink: 'View on GitHub',
      liveDemo: 'Live demo',
      contactEyebrow: '05 — contact',
      contactTitle: "Let's talk",
      contactDescription: 'I am looking for an internship or my first job. If you have an interesting project or an opening, write to me — I reply quickly.',
      email: 'Send email',
      footerNote: 'Built with HTML, CSS, and vanilla JS',
      toggleLabel: 'Switch to Spanish',
      toggleText: 'ES',
      language: 'en'
    }
  };

  function setText(selector, value) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
      Array.from(element.childNodes)
        .filter(function (node) { return node.nodeType === Node.TEXT_NODE; })
        .forEach(function (node) { node.remove(); });
      element.appendChild(document.createTextNode(value));
    });
  }

  function setPrefix(selector, value) {
    const element = document.querySelector(selector);
    if (!element) return;
    Array.from(element.childNodes)
      .filter(function (node) { return node.nodeType === Node.TEXT_NODE; })
      .forEach(function (node) { node.remove(); });
    element.insertBefore(document.createTextNode(value), element.firstChild);
  }

  function setHtml(selector, value) {
    document.querySelector(selector).innerHTML = value;
  }

  function setLanguage(language) {
    const text = translations[language];
    document.documentElement.lang = language;
    document.title = text.title;
    document.querySelector('meta[name="description"]').content = text.description;
    document.querySelectorAll('.navbar__link').forEach(function (link, index) {
      link.textContent = text.nav[index];
    });
    setText('.hero__greeting', text.greeting);
    setPrefix('.hero__role', text.rolePrefix);
    setText('.hero__description', text.heroDescription);
    setText('.hero__actions .btn--primary', text.viewProjects);
    setText('.hero__actions .btn--secondary', text.downloadCv);
    setText('.about .section__eyebrow', text.aboutEyebrow);
    setText('#about-title', text.aboutTitle);
    document.querySelectorAll('.about__paragraph').forEach(function (paragraph, index) {
      paragraph.innerHTML = text.aboutParagraphs[index];
    });
    document.querySelectorAll('.about__fact').forEach(function (fact, index) {
      const icon = fact.querySelector('svg');
      fact.innerHTML = '';
      fact.append(icon, document.createTextNode(text.facts[index]));
    });
    setText('.about__stat-label', text.stat);
    setText('.skills .section__eyebrow', text.skillsEyebrow);
    setText('#skills-title', text.skillsTitle);
    setText('.skills .section__subtitle', text.skillsSubtitle);
    document.querySelectorAll('.skills__category-title').forEach(function (title, index) {
      title.textContent = text.skillCategories[index];
    });
    setText('.projects .section__eyebrow', text.projectsEyebrow);
    setText('#projects-title', text.projectsTitle);
    setText('.projects__grid + .section__subtitle, .projects .section__subtitle', text.projectsSubtitle);
    setText('.project-card__badge', text.featured);
    document.querySelectorAll('.project-card__title').forEach(function (title, index) {
      title.textContent = text.projectTitles[index];
    });
    document.querySelectorAll('.project-card__description').forEach(function (description, index) {
      description.textContent = text.projectDescriptions[index];
    });
    setText('.project-card__link--primary', text.githubLink);
    setText('.project-card__link:not(.project-card__link--primary)', text.liveDemo);
    setText('.contact .section__eyebrow', text.contactEyebrow);
    setText('#contact-title', text.contactTitle);
    setText('.contact__description', text.contactDescription);
    setText('.contact__btn--primary', text.email);
    setText('.footer__text--muted', text.footerNote);
    toggle.textContent = text.toggleText;
    toggle.setAttribute('aria-label', text.toggleLabel);
    localStorage.setItem('portfolio-language', language);
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: language } }));
  }

  const savedLanguage = localStorage.getItem('portfolio-language');
  setLanguage(savedLanguage === 'en' ? 'en' : 'es');
  toggle.addEventListener('click', function () {
    const nextLanguage = document.documentElement.lang === 'es' ? 'en' : 'es';
    setLanguage(nextLanguage);
  });
}());
