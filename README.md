# Portafolio Profesional

Portafolio web personal desarrollado para presentar el perfil profesional, habilidades técnicas y proyectos de Manuel Isaac Camaño Díaz.

## 🌐 Demo

**GitHub Pages:**

https://manuelisaaccamanidiaz-lgtm.github.io/portafolio_profesional/

> [PENDIENTE] Verificar que esta URL se encuentre actualmente configurada y publicada mediante GitHub Pages.

**Repositorio:**

https://github.com/manuelisaaccamanidiaz-lgtm/portafolio_profesional

## 📖 Descripción

Este proyecto es un portafolio profesional web diseñado para presentar de forma clara y visual el perfil de Manuel Isaac Camaño Díaz como estudiante de Desarrollo de Software en Campuslands.

El sitio reúne información personal y profesional, habilidades técnicas, proyectos realizados y diferentes medios de contacto, funcionando como una carta de presentación digital para oportunidades de prácticas profesionales y primeras experiencias laborales.

El repositorio contiene un desarrollo frontend realizado con HTML, CSS y JavaScript vanilla, acompañado de recursos gráficos y documentos profesionales.

## 🎯 Objetivos

* Presentar el perfil profesional y académico.
* Mostrar las habilidades y tecnologías utilizadas.
* Presentar proyectos desarrollados durante el proceso de formación.
* Facilitar el contacto profesional.
* Contar con una carta de presentación digital accesible desde un navegador.
* Practicar la organización y publicación de un proyecto frontend mediante Git y GitHub.

## 🛠️ Tecnologías utilizadas

| Tecnología       | Uso                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML5**        | Estructura y contenido de las diferentes secciones del portafolio.                                                                              |
| **CSS3**         | Diseño visual, distribución de elementos, animaciones y adaptación a diferentes tamaños de pantalla.                                            |
| **JavaScript**   | Interactividad del menú móvil, cambios de navegación al hacer scroll, animaciones de entrada, texto rotatorio y actualización dinámica del año. |
| **Google Fonts** | Carga de las familias tipográficas Inter y JetBrains Mono.                                                                                      |
| **Git / GitHub** | Control de versiones y almacenamiento del proyecto.                                                                                             |
| **GitHub Pages** | [PENDIENTE] Confirmar configuración actual para el despliegue del portafolio.                                                                   |

El proyecto no utiliza frameworks frontend como React, Angular, Vue, Bootstrap o Tailwind CSS.

## 📁 Estructura del proyecto

```text
portafolio_profesional/
├── .vscode/
│   └── settings.json
├── assets/
│   ├── cv/
│   │   └── isaac-camano-cv.pdf
│   └── img/
│       ├── favicon.ico
│       ├── foto-perfil.jpg
│       ├── og-preview.jpg
│       ├── proyecto-acmebank.jpg
│       ├── proyecto-deliverybot.jpg
│       └── proyecto-tienda.jpg
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── Hoja De Vida Campuslands.pdf
├── Hoja de Vida personal.pdf
└── index.html
```

### Principales directorios

* **`assets/`**: contiene los recursos utilizados por el portafolio, incluyendo imágenes y el CV utilizado para su descarga desde la página.
* **`assets/img/`**: almacena la fotografía de perfil, favicon, imagen de vista previa y capturas asociadas a los proyectos.
* **`assets/cv/`**: contiene el CV en formato PDF enlazado desde el portafolio.
* **`css/`**: contiene la hoja de estilos principal `styles.css`.
* **`js/`**: contiene `main.js`, encargado de las interacciones dinámicas del sitio.
* **`.vscode/`**: contiene la configuración de Live Server utilizada por el proyecto.
* **`index.html`**: documento principal que contiene la estructura del portafolio.

## 💻 Características del portafolio

El sitio está organizado en diferentes secciones orientadas a presentar el perfil profesional:

### Presentación

La sección inicial muestra:

* Fotografía de perfil.
* Nombre.
* Rol profesional.
* Descripción personal.
* Botón para visualizar los proyectos.
* Botón para descargar el CV.

El rol profesional incluye un texto que cambia automáticamente mediante JavaScript.

### Sobre mí

Presenta información sobre el perfil académico y personal, junto con datos relacionados con ubicación, formación y disponibilidad para prácticas profesionales.

### Habilidades

Las tecnologías y herramientas se presentan agrupadas en diferentes categorías:

* JavaScript
* n8n
* Python
* Java
* HTML5
* CSS3
* MySQL
* Google Sheets
* Git / GitHub
* Prompt Engineering
* Visual Studio Code

### Proyectos

El portafolio presenta actualmente tres proyectos:

1. **DeliveryBot** — Bot de Telegram para la gestión de pedidos de cafetería, desarrollado con n8n y Google Sheets.
2. **AcmeBank** — Plataforma bancaria web desarrollada con JavaScript, HTML5 y CSS3.
3. **Tienda de Ropa — Frontend** — Interfaz frontend desarrollada con HTML5 y CSS3.

Cada proyecto incluye una descripción, tecnologías utilizadas y enlaces relacionados.

### Contacto

La sección de contacto incluye enlaces para:

* Enviar un correo electrónico.
* Acceder a LinkedIn.
* Acceder al perfil de GitHub.

También se incluye una tarjeta para consultar más proyectos directamente desde GitHub.

## 🎨 Diseño y experiencia de usuario

El portafolio utiliza un diseño visual orientado a una presentación profesional, con navegación fija, secciones claramente diferenciadas, tarjetas para los proyectos y elementos visuales de apoyo.

El diseño incluye adaptación para tabletas y dispositivos móviles mediante media queries de CSS. En pantallas pequeñas, la navegación se transforma en un menú hamburguesa controlado mediante JavaScript.

También se implementan animaciones de entrada al desplazarse por la página y cambios visuales en la barra de navegación durante el scroll.

## 📄 Documentos profesionales

El repositorio contiene documentos profesionales en formato PDF:

* `Hoja De Vida Campuslands.pdf`
* `Hoja de Vida personal.pdf`
* `assets/cv/isaac-camano-cv.pdf`

El archivo ubicado en `assets/cv/` está enlazado directamente desde el botón **Descargar CV** del portafolio.

Los documentos se mantienen como recursos profesionales del proyecto y no se reproduce aquí información personal contenida en ellos.

## 🚀 Instalación y ejecución local

Este es un proyecto frontend estático, por lo que no requiere instalación de dependencias mediante npm.

### 1. Clonar el repositorio

```bash
git clone https://github.com/manuelisaaccamanidiaz-lgtm/portafolio_profesional.git
```

### 2. Entrar al directorio

```bash
cd portafolio_profesional
```

### 3. Ejecutar el proyecto

Se puede abrir `index.html` directamente desde el navegador.

También es posible utilizar **Live Server** desde Visual Studio Code. El repositorio incluye una configuración específica para Live Server en `.vscode/settings.json`.

## 🌍 Despliegue en GitHub Pages

Al tratarse de un proyecto frontend estático con `index.html` como archivo principal, puede desplegarse mediante GitHub Pages.

De forma general:

1. Abrir el repositorio en GitHub.
2. Entrar en **Settings → Pages**.
3. Seleccionar la rama `main` como fuente de publicación.
4. Seleccionar la carpeta raíz del repositorio (`/root`).
5. Guardar la configuración.
6. Esperar a que GitHub Pages genere el sitio.

**Demo:**

https://manuelisaaccamanidiaz-lgtm.github.io/portafolio_profesional/

> [PENDIENTE] Confirmar desde la configuración del repositorio si GitHub Pages ya se encuentra habilitado.

## 📚 Aprendizajes

El desarrollo de este proyecto permitió trabajar directamente en:

* Estructuración de páginas mediante HTML5.
* Diseño y organización visual mediante CSS3.
* Desarrollo de interacciones con JavaScript vanilla.
* Implementación de diseño responsive.
* Uso de animaciones e interacción con el DOM.
* Organización de archivos y recursos de un proyecto frontend.
* Uso de Git y GitHub para gestionar el código.
* Presentación de proyectos y habilidades dentro de un perfil profesional.

## 🔮 Mejoras futuras

Las siguientes propuestas corresponden a posibles mejoras y **no forman parte de las funcionalidades actuales documentadas**:

* Mejorar progresivamente la accesibilidad del sitio.
* Optimizar el rendimiento y la carga de recursos.
* Ampliar la información de los proyectos con demostraciones y documentación.
* Incorporar nuevos proyectos a medida que avance la formación.
* Mejorar detalles de la experiencia en dispositivos móviles.
* Incorporar un formulario de contacto funcional.
* Añadir nuevas optimizaciones visuales y de interacción.

## 👨‍💻 Autor

**Manuel Isaac Camaño Díaz**

**GitHub:**
https://github.com/manuelisaaccamanidiaz-lgtm

**LinkedIn:**
https://www.linkedin.com/in/manuel-isaac-camaño-diaz-707006305/

## 📄 Licencia

Este repositorio no contiene una licencia de software explícita.

Este proyecto fue desarrollado con fines académicos y de portafolio profesional.
