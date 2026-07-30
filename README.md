# Portfolio Website

A minimal single-page portfolio built with React + Vite.

## Structure

- `src/data/content.js` — all editable content (name, bio, projects, experience, contact links). Start here.
- `src/components/` — one component per section (Nav, Hero, About, Experience, Projects, Contact, Footer).
- `src/index.css` — global styles. Supports light/dark mode automatically via `prefers-color-scheme`.
- `public/resume.pdf` — add your resume here to match the download link in the Experience section.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`, deployable to any static host (Vercel, Netlify, GitHub Pages, etc.).
