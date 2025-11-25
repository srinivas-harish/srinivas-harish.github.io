Srinivas Harish — Cinematic React/Vite Portfolio

This repository contains the source for my personal website, rebuilt as a cinematic, black‑hole themed React application bundled with Vite and deployed on GitHub Pages.

- Tech: React + Vite, modern CSS (no UI frameworks)
- Aesthetic: deep‑slate gradients, glassmorphism, premium motion, and a cosmic black‑hole hero

Structure
- `index.html` — Vite entry (mounts the React app)
- `vite.config.js` — Vite configuration (GitHub Pages base path)
- `package.json` — Dependencies and npm scripts
- `public/` — Resume, icons, manifest, robots, sitemap
- `src/main.jsx` — App bootstrap
- `src/App.jsx` — Main layout and interaction wiring
- `src/components/` — React components (hero, navbar, sections, footer)
- `src/styles/` — Theming, layout, components, hero

Local development
- Install dependencies: `npm install`
- Start dev server: `npm run dev`

Production build
- Build optimized assets: `npm run build`
- Preview local production build: `npm run preview`

GitHub Pages
- The site is built as a static bundle in `dist/`.
- `vite.config.js` sets `base: "/srinivas-harish.github.io/"` for correct asset paths on GitHub Pages.
