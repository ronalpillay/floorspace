# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Next.js 16.2 App Router)
npm run build    # Production build — run this to verify before committing
npm run lint     # ESLint check
npx tsc --noEmit # Type-check without emitting
```

No test suite exists. Verification means `build` + `tsc --noEmit` both pass.

## Stack

- **Next.js 16.2** — App Router only, no Pages Router. `params` is now a `Promise<{…}>` — always `await params` in server components and `generateMetadata`.
- **React 19**
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `globals.css`; there is no `tailwind.config.js`. Use CSS custom properties for design tokens, not Tailwind classes.
- **TypeScript** strict mode, path alias `@/*` → `src/*`
- **GSAP 3** (`gsap` + `@gsap/react`) — all scroll animations. Use `useGSAP()` hook, not `useEffect`, for GSAP setup; always `await import("gsap/ScrollTrigger")` dynamically to avoid SSR issues.
- **Lucide React** for icons

## Environment Variables

```
NEXT_PUBLIC_WEB3FORMS_KEY   # Contact form submission (Web3Forms)
OPENAI_API_KEY              # AI chatbot route (currently unused in UI)
```

## Architecture

Marketing site for Floorspace India (turnkey interior contractors). Multiple routes exist but the main entry is `src/app/page.tsx`.

### Homepage (`src/app/page.tsx`)

One large client component (`"use client"`) that assembles the full page. The entire GSAP animation block runs inside a single `useGSAP()` call near the bottom. Section order:

```
ContemporaryNav → Hero (slideshow) → Stats → Clients/LogoMarquee →
Service Cards → About → FeaturedStack → Sectors → Testimonials →
Contact form → Footer
```

### Other routes

| Route | Notes |
|---|---|
| `/work` | Portfolio page — uses `WorkPortfolio` (client, filterable by sector) + `VideoShowcase` |
| `/projects` | Grid of all projects from `src/data/projects.ts` |
| `/projects/[slug]` | Dynamic project detail; `generateStaticParams` pre-renders all slugs |
| `/contact` | Standalone contact page with map |
| `/about`, `/services` | Static marketing pages |
| `/sitemap.xml`, `/robots.txt` | Auto-generated via `src/app/sitemap.ts` / `src/app/robots.ts` |

### Data layer

`src/data/projects.ts` is the single source of truth for all project content. It exports `projects: Project[]` and `getProjectBySlug(slug)`. The `Project` interface has: `slug`, `name`, `sector`, `city`, `area`, `coverImage`, `coverAlt`, `desc`, `longDesc`, `category`, `images[]`.

### Layout-level globals (`src/app/layout.tsx`)

- **`RevealObserver`** — IntersectionObserver that adds `.in-view` to `<main>` direct children when they scroll into view, triggering CSS `.reveal` transitions defined in `contemporary.css`
- **`ScrollProgressBar`** — fixed top bar
- **`Preloader`** — full-screen entry animation
- **`BackToTop`** — fixed bottom-left button, appears after 400px scroll
- **Social FABs** — Instagram + LinkedIn + WhatsApp fixed to the right
- **JSON-LD** — `LocalBusiness` schema injected in `<head>`

## CSS Architecture

Three CSS files are imported globally in `layout.tsx`; a fourth is page-specific:

| File | Purpose |
|---|---|
| `globals.css` | Tailwind entry + shadcn-compatible `@theme` tokens + base resets |
| `contemporary.css` | **Primary design system** — all `--c-*` tokens, component styles, animations, responsive rules. 5000+ lines, sectioned with `/* ── Name ── */` comments. |
| `polish.css` | Fine-tuning overrides, scroll-snapping, detail polish |
| `page-hero.css` | Shared hero styles used by inner page routes |

**Rule**: all colors and spacing come from CSS custom properties. Never hardcode palette values. The `--c-*` tokens in `contemporary.css` are for the contemporary design system; the `--color-*` tokens in `globals.css` are the shadcn/Tailwind layer.

Key `--c-*` tokens: `--c-ink` (`#111110`), `--c-bg` (`#f5f5f3`), `--c-accent` (`#264347`), `--c-border`.

## Component Patterns

**Server vs. client split**: pages that need `metadata` exports must be server components. Extract interactive parts into separate `"use client"` components (e.g. `WorkPortfolio.tsx` is a client component imported by the server `work/page.tsx`).

**GSAP in Next.js**: Always use `useGSAP()` from `@gsap/react`. Dynamic-import `ScrollTrigger` inside the hook body to avoid SSR errors. Selectors are scoped to a `containerRef` passed as `scope`. `FeaturedStack.tsx` is the canonical example of this pattern.

**Logo marquee**: `LogoMarquee.tsx` runs a JS `requestAnimationFrame` loop (not CSS animation) for precise pause-on-hover control. It uses `fill` mode Next.js `<Image>` with `objectFit: "contain"` inside a `position: absolute` wrapper — do not revert to `width`/`height` props, which cause distortion.

**Images**: `next.config.ts` sets `images: { unoptimized: true }`. Project images live in `public/images/<project-slug>/`. Client logos are PNGs in `public/images/clients/<slug>.png`. Videos are MP4s in `public/videos/` (gitignored — large files).

**Contact form**: Three places submit to Web3Forms (`https://api.web3forms.com/submit`) using `NEXT_PUBLIC_WEB3FORMS_KEY`: `src/app/page.tsx`, `src/app/contact/page.tsx`, and `src/components/Contact.tsx`. All include a honeypot `<input name="botcheck">`.

## Security Headers

Configured in `next.config.ts` via `async headers()`. CSP allows: `'unsafe-inline'` for scripts (required by Next.js hydration), Google Fonts, `https://unpkg.com` (MapLibre CSS), Web3Forms API, MaptTiler/OSM for the map. Changing the CSP requires testing the map on `/contact`.
