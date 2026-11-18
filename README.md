# Portafolio de Jhonatan Alvarado

Sitio personal de presentación profesional como **Ingeniero de Software Full Stack**. Incluye experiencia, habilidades, proyectos, formación y medios de contacto, en español e inglés.

## Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (configuración en CSS)
- [daisyUI 5](https://daisyui.com/) con temas personalizados
- [gh-pages](https://github.com/tschaub/gh-pages) para despliegue

## Características

- Selector de idioma **ES / EN** con traducción completa del sitio y persistencia en `localStorage`.
- Cambio de **tema claro / oscuro** con detección de la preferencia del sistema, persistencia y sin parpadeo al cargar.
- Diseño **responsive** (móvil, tablet y escritorio) con menú móvil accesible.
- Secciones: inicio, sobre mí, habilidades, experiencia, educación, proyectos y contacto.
- CV descargable en PDF para cada idioma (`public/cv/`).
- Metadatos SEO, Open Graph y datos estructurados `Person`.

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
npm run lint     # revisar el código con ESLint
npm run deploy   # publicar en GitHub Pages
```

## Estructura

```
src/
├── components/       # secciones y componentes de UI
├── data/profile.js   # datos compartidos (contacto, empleos, proyectos)
├── hooks/            # tema y sección activa
├── i18n/             # diccionarios ES/EN y contexto de idioma
├── assets/           # imágenes
├── App.jsx
└── index.css         # Tailwind, temas de daisyUI y estilos base
```

## Despliegue

El sitio se publica en GitHub Pages bajo la ruta del repositorio. `vite.config.js` define:

```js
base: '/jhonatanalvarado/'
```

Si se usa un dominio propio, cambia `base` a `'/'` y actualiza las URLs absolutas de `index.html` (`og:url`, `og:image`) y del JSON-LD.
