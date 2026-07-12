# Scale X Process & Engineering — Corporate Website

**From Idea to Industry.**

Premium corporate website for Scale X Process & Engineering, a global industrial
consultancy providing complete turnkey solutions for manufacturing industries —
from concept, feasibility studies, engineering, and approvals through
construction, commissioning, and commercial production.

## Tech Stack

- **Next.js 16** (App Router, fully static output) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with a custom design-token theme
- **Framer Motion** for scroll reveals, the mega menu, counters, and the interactive timeline
- **next/font** self-hosted **Manrope** (headings) and **Inter** (body)

## Design System

| Token | Value |
| --- | --- |
| Deep Navy (primary) | `#071B34` |
| Royal Blue (secondary) | `#0D5CFF` |
| Electric Cyan (accent) | `#00C2FF` |
| Background | `#F7F9FC` |
| Dark | `#101828` |
| Success | `#00C48C` |

Glassmorphism cards, blueprint-grid backdrops, animated light beams, gradient
branding (`Deep Blue → Electric Blue`), and class-based dark mode with a
FOUC-free inline theme script.

## Pages

`/` Home · `/about` · `/services` (16 service lines) · `/industries` (20 sectors)
· `/projects` (filterable portfolio with case detail) · `/knowledge` (articles,
downloads, videos, FAQ) · `/careers` · `/contact` (inquiry form, world map,
offices) · `/privacy` · `/terms`

Plus `sitemap.xml`, `robots.txt`, JSON-LD organization schema, and full
OpenGraph/Twitter metadata.

## Signature Features

- Cinematic animated hero with word-by-word headline reveal, animated factory
  skyline SVG, panning blueprint grid, and animated metric counters
- Interactive **Idea → Industry** 11-stage timeline with scroll-driven progress rail
- Sticky glass navbar with services mega menu and mobile drawer
- Auto-rotating testimonial carousel, client logo marquee
- Floating WhatsApp CTA with pulse ring + back-to-top button
- Cookie consent, newsletter capture, dark/light theme toggle
- `prefers-reduced-motion` respected throughout

## Development

```bash
npm install
npm run dev     # local development
npm run build   # production build (all routes prerender statically)
npm run lint
```
