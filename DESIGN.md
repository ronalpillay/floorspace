# Design System

## Palette
- **Warm Crema (`#F7F6F2`)**: Base background for all pages. Soft, welcoming, and high-end.
- **Warm Charcoal (`#1C1B19`)**: Primary ink for text and dark panels. Deep and rich, never pure black.
- **Refined Bronze (`#A68B6A`)**: Accent color. Used sparingly for borders, subtle highlights, and interactive states.
- **Muted Beige (`#EBE9E2`, `#DCD9D0`)**: Secondary surfaces.

## Typography
- **Primary Font**: `var(--font-outfit)`. Clean, geometric sans-serif with a premium feel.
- **Hierarchy**: Rely on weight and scale contrast (e.g., 400 weight for giant headings instead of 800) to maintain an editorial, airy feel.
- **Tracking**: Use slight negative letter-spacing for large headlines (`-0.02em`), and wide tracking for uppercase kickers (`0.2em`).

## Elevation & Depth
- **No Heavy Shadows**: Avoid generic drop-shadows. Depth is achieved through borders (`1px solid rgba(...)`), subtle overlaps, and layout asymmetry.
- **Glass/Blur**: Used very intentionally over imagery, not as a default for all cards.

## Components
- **Layout**: Asymmetric grids and bento-box structures.
- **Cards**: Avoid nested cards and identical repeating grids.
- **Interactive**: Hover states should be subtle. Smooth transform scaling instead of layout thrashing.
