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
  const roles = [
    'Full Stack Junior',
    'Apasionado por la IA',
    'Entusiasta de la Automatización',
    'Curioso por naturaleza'
  ];

  let indiceActual = 0;

  function cambiarTexto() {
    /* Paso 1: desvanecer y subir el texto actual */
    elemento.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    elemento.style.opacity    = '0';
    elemento.style.transform  = 'translateY(-8px)';

    setTimeout(function () {
      /* Paso 2: cambiar al siguiente texto */
      indiceActual        = (indiceActual + 1) % roles.length;
      elemento.textContent = roles[indiceActual];

      /* Paso 3: posicionar abajo antes de aparecer */
      elemento.style.transform = 'translateY(8px)';

      setTimeout(function () {
        /* Paso 4: aparecer subiendo */
        elemento.style.opacity   = '1';
        elemento.style.transform = 'translateY(0)';
      }, 50);

    }, 300);
  }

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
