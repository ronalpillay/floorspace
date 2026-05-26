# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Next.js 16 App Router)
npm run build    # Production build
npm run lint     # ESLint check
```

Type-check without emitting: `npx tsc --noEmit`

## Stack

- **Next.js 16.2** with React 19 — App Router, no Pages Router
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in globals.css, not via `tailwind.config`
- **TypeScript** (strict mode), path alias `@/*` → `src/*`
- **AI chatbot**: Vercel AI SDK (`ai` package) + `@ai-sdk/openai`, route at `src/app/api/chat/route.ts`

## Architecture

This is a single-page marketing site for Floorspace India (turnkey interior contractors). The entire site renders from `src/app/page.tsx`, which assembles a linear sequence of section components:

```
Nav → Hero → FeaturedWork → Stats → About → Services →
FullBleedBanner → Portfolio → Testimonials → EngageCTA → Contact → Footer
```

Two layout-level utilities are injected globally via `src/app/layout.tsx`:
- **ScrollReveal** — IntersectionObserver that adds `.in-view` to `<main>` children, triggering CSS `.reveal` transitions
- **ScrollProgressBar** — fixed top progress bar
- **Chatbot** — floating AI chat widget (bottom-right), uses `useChat` from `ai/react`

## Design System

All design tokens are CSS custom properties defined in `src/app/globals.css`. Do not hardcode palette values:

| Token | Value | Use |
|---|---|---|
| `--warm-white` | `#F4F6F9` | Page background |
| `--ink` | `#0A0B1A` | Primary text/dark elements |
| `--brown-1` | `#0EB2E4` | Brand cyan (accent) |
| `--brown-2` | `#464692` | Brand purple (primary accent) |
| `--muted` | `#7D8599` | Secondary text |

**Global utility classes** (defined in globals.css, use these rather than rewriting):
- `.eyebrow` — small all-caps label
- `.divider-gold` — accent divider bar
- `.btn-primary`, `.btn-secondary`, `.btn-whatsapp` — pill buttons with hover animations
- `.glass-panel`, `.glass-panel-dark` — frosted glass surfaces
- `.hover-lift` — translateY card hover effect
- `.reveal` / `.in-view` — scroll animation (applied automatically by ScrollReveal)
- `.fade-up`, `.delay-1` through `.delay-5` — hero entry animations
- `.stat-num`, `.stat-num-dark` — large italic stat numerals
- `.marquee-wrap` / `.marquee-track` — infinite scroll ticker

## Component Patterns

- Section components use inline `style` for layout/spacing (not Tailwind classes) and CSS custom properties for colors/typography
- Responsive breakpoints are handled with `clamp()` for fluid sizing and `<style>` tags inside JSX components for media query overrides
- Client components requiring interactivity are marked with `"use client"` — keep this to only what's needed
- Portfolio images are in `public/images/` as `.jpg` files; use `loading="lazy"` for below-fold images and `fetchPriority="high"` only for the hero
