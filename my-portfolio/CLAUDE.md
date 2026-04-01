# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server on port 3000
npm run build      # Production build
npm test           # Jest test runner
npm run deploy     # Build + deploy to GitHub Pages (gh-pages)
```

## Architecture

Single-page React 19 + TypeScript portfolio site, bootstrapped with Create React App, deployed to GitHub Pages.

**App structure** — `App.tsx` composes the page as a vertical stack of section components:
`Header` → `ParticlesBackground` → `Profile` → `WorkExperience` → `Projects` → `Contact` → `Footer`

**Navigation** — `Header.tsx` uses smooth scroll via anchor `id`s (`#profile`, `#work`, `#projects`, `#contact`). Scroll position is tracked by the `useScrollAnimation` hook (`src/hooks/useScrollAnimation.ts`) to trigger sticky/transparent header transitions.

**Animations** — Framer Motion (`motion.div` with `whileInView`) drives entrance animations on most sections. Background uses `react-tsparticles`. `FloatingOrb.tsx` (React Three Fiber) exists but is not currently rendered in `App.tsx`.

**Styling** — Tailwind CSS utility classes throughout. Custom color tokens are defined in `tailwind.config.js` (e.g., `primaryBlue`, `darkBlue`, `accentBlue`, `navyBlue`).

**Contact form** — `Contact.tsx` posts to Formspree (`formspree.io/f/mnnjzobo`) via a standard `fetch` call with form state managed in component-local state.

**External integrations** — YouTube iframes in `Projects.tsx`, social links (LinkedIn, GitHub, email) in `Profile.tsx`.
