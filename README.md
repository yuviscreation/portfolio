# Portfolio (Next.js + Tailwind)

Personal portfolio built with Next.js, React and Tailwind CSS. Includes feature sections (hero, about, projects, skills, experience, education, contact) and a small set of UI helpers/components.

## Quick Start

- Prerequisites: Node.js (18+), npm
- Install:

```bash
npm install
```

- Run development server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
npm start
```

## Tech Stack

- `Next.js` (app/pages routing)
- `React` + functional components
- `Tailwind CSS` for styling
- `react-toastify` for toast notifications

## Project Structure

Top-level layout of the project (trimmed to main files/folders):

```
portfolio/
  components.json
  LICENSE
  next-env.d.ts
  package.json
  postcss.config.js
  README.md
  tailwind.config.js
  tsconfig.json
  components/
    Hero.jsx
    ui/
      background-gradient-animation.tsx
      background-gradient.tsx
      background-ripple-effect.tsx
      bento-grid.tsx
      encrypted-text.tsx
      EncryptedText.jsx
      glowing-effect.tsx
      sparkles.tsx
      spotlight-new.tsx
      timeline-progress.tsx
      timeline.tsx
      typewriter-effect.tsx
      wobble-card.tsx
  lib/
    utils.ts
  pages/
    _app.jsx
    index.jsx
  public/
    favicon/
      site.webmanifest
    images/
      social/
        README.md
  src/
    features/
      index.js
      about/
        about-data.js
        About.jsx
        AboutSection.jsx
        index.js
      contact/
        contact-data.js
        ContactSection.jsx
        index.js
      education/
        education-data.js
        EducationSection.jsx
        index.js
      experience/
        experience-data.js
        FeaturedProjects.jsx
        index.js
        ProjectCard.jsx
      footer/
        Footer.jsx
        index.js
      hero/
        hero-data.js
        Hero.jsx
        index.js
      projects/
        index.js
        MyProjects.jsx
        projects-data.js
      skills/
        index.js
        skills-data.js
        SkillsSection.jsx
    shared/
      index.js
      components/
        index.js
        InView.jsx
      constants/
        index.js
        tag-icons.js
      hooks/
        index.js
        useScrollToId.js
  styles/
    globals.css

```

## Notes

- The project previously imported `react-toastify` CSS locally; during development the app may use a CDN stylesheet instead to avoid PostCSS build issues on some systems.
- If you encounter build errors, try removing the `.next` folder and re-running `npm run dev`.

## Contributing

File issues or PRs for improvements. Small, focused changes are preferred.

---

Generated README for local development and quick overview.
