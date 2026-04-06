# TurboQuant Network (Astro Edition)

High-performance, SEO-optimized AI agent platform website built with Astro.

## Project Structure

- `src/layouts/BaseLayout.astro`: The core structural component providing SEO meta-tags, global styles, and persistent UI elements (notifications, voice overlay).
- `src/components/`: Reusable high-fidelity UI modules.
  - `Navbar.astro`: Global navigation with mobile support.
  - `Footer.astro`: Comprehensive site footer and social links.
  - `Hero.astro`: Premium landing intro with dynamic gradients.
  - `FeatureCard.astro`: Information grids for capabilities and platform features.
  - `BlogCard.astro`: Article preview component for the knowledge hub.
- `src/pages/`: Modularized routes corresponding to the platform sections.
  - `/`: Main landing hub.
  - `/platform`: AI Agent system deep-dives.
  - `/kanban`: Self-driving project board demonstration.
  - `/build`: Agent creation guides and SDK examples.
  - `/automation`: No-code integration ecosystem.
  - `/blog`: Knowledge hub for autonomous AI trends.
  - `/roadmap`: 2026 development milestones.
  - `/about`: DePIN economy and $EDGE tokenomics.
  - `/privacy`: Enterprise compliance and legal.

## Features

- **SEO Dominance**: Automated JSON-LD structured data, hreflang tags for 10 languages, and canonical management.
- **Icemorphism Design System**: Premium, high-fidelity aesthetics with rich glassmorphism and motion.
- **Dynamic Interaction**: Built-in voice command overlay, theme toggle, and notification systems.
- **Performance First**: Astro's zero-JS-by-default architecture ensures sub-second load times.

## Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```
