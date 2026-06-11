# ThatMattGuy — Studio Website

The ThatMattGuy site: a dark, cinematic creative-developer studio site that doubles as a live
showcase of the work — built with Next.js, GSAP and Three.js, fully statically rendered for SEO.

## Stack

- **Next.js 14** (App Router, static generation) — SEO-first architecture
- **GSAP + ScrollTrigger** (`@gsap/react`) — scroll choreography, text reveals, page transitions
- **Three.js via React Three Fiber + drei** — interactive 3D hero scene (lazy-loaded)
- **Lenis** — smooth scrolling, synced with ScrollTrigger
- **Tailwind CSS** — design system (dark palette, `acid` accent, Space Grotesk + Inter)

## Structure

```
app/                  Routes (all statically prerendered)
├── page.jsx          Home — 3D hero, marquee, services strip, stats, work, process
├── services/         Services index + [slug] detail pages (SSG)
├── about/ portfolio/ contact/ privacy/ terms/
├── layout.jsx        Fonts, metadata, JSON-LD, providers
├── template.jsx      GSAP page transitions
├── sitemap.js robots.js
components/
├── anim/             Reveal, TextReveal, Counter, Marquee (GSAP primitives)
├── home/             Hero, ServicesStrip, Approach, Work, Process
├── three/            HeroScene (R3F) + HeroCanvas (lazy wrapper + reduced-motion fallback)
├── Nav, Footer, Cursor, Magnetic, PageHeader, ContactForm, SmoothScroll
lib/
├── data.js           Site config, services, pricing, projects, process, stats
└── gsap.js           GSAP plugin registration
```

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (all pages SSG)
npm start       # serve production build
```

## SEO

- Per-page metadata via the Next Metadata API (titles, descriptions, canonicals, OG)
- `ProfessionalService` + per-service `Service` JSON-LD structured data
- Generated `sitemap.xml` and `robots.txt`
- All copy is server-rendered; GSAP/Three.js are progressive enhancement only
- `prefers-reduced-motion` disables smooth scroll, cursor, and the 3D scene

## Deployment

Zero-config deploy on Vercel — push to the connected repo or run `vercel`.

## Notes

- Contact form posts to Web3Forms (access key in `components/ContactForm.jsx`)
- If `npm run build` fails with `EPERM ... .next/trace`, pause OneDrive sync or exclude
  the `.next` folder from syncing — OneDrive locks build files.
