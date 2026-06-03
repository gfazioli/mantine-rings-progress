# Mantine Rings Progress Component

<img alt="Mantine Rings Progress" src="https://github.com/gfazioli/mantine-rings-progress/blob/master/logo.jpeg" />

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)

---

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.
It requires **Mantine 9.x** and **React 19**.

[Mantine Rings Progress](https://gfazioli.github.io/mantine-rings-progress/) is a Mantine UI extension that renders multiple concentric ring progress indicators — inspired by the Apple Watch activity rings. Each ring is defined by a value and color, and the component wraps native Mantine `RingProgress` instances with rich customization options.

### Features

- **Per-ring customization** — Override `thickness`, `roundCaps`, and `rootColor` on individual rings
- **Per-ring linear gradients** — Paint a ring's stroke with a two-stop gradient via `gradient: { from, to, deg? }`
- **Per-ring value labels** — `showValues` (or per-ring `showValue`) drops a styled pill at the endpoint of each arc, with custom `formatValue`
- **Per-ring interactions** — `onClick` and `onHover` callbacks with **geometric hit-testing**, so the right ring fires even when their wrappers overlap
- **Entrance animation** — Animate rings from 0 to their target values on mount
- **Staggered animation** — Animate rings one after another with configurable delay
- **Animated value changes** — `animateValueChanges` interpolates value updates after mount (great for live dashboards)
- **Glow / neon effect** — `drop-shadow` glow that follows the ring shape, with per-ring intensity and color
- **Pulse on completion** — Subtle pulse animation when a ring reaches 100%, with `onRingComplete` callback
- **Start angle & direction** — Customize where rings start filling and in which direction (clockwise/counterclockwise)
- **Unified tooltip** — `withTooltip` shows a chart-like tooltip with color swatches for all rings
- **Accessibility** — `role="progressbar"` with ARIA attributes on each ring, keyboard activation for clickable rings, `prefers-reduced-motion` support
- **Central label** — Display any React node (text, emoji, component) centered in the rings

> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-rings-progress/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)


## Installation

```sh
npm install @gfazioli/mantine-rings-progress
```
or

```sh
yarn add @gfazioli/mantine-rings-progress
```
After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-rings-progress/styles.css';
```

## Usage

```tsx
import { RingsProgress } from '@gfazioli/mantine-rings-progress';

function Demo() {
  const rings = [
    { value: 75, color: 'green' },
    { value: 50, color: 'blue' },
    { value: 90, color: 'orange' },
  ];

  return (
    <RingsProgress
      size={180}
      rings={rings}
      animate
      staggerDelay={300}
      transitionDuration={1000}
      glow={6}
    />
  );
}
```
## Sponsor

<div align="center">

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

Your support helps me:

- Keep the project actively maintained with timely bug fixes and security updates
- Add new features, improve performance, and refine the developer experience
- Expand test coverage and documentation for smoother adoption
- Ensure long‑term sustainability without relying on ad hoc free time
- Prioritize community requests and roadmap items that matter most

Open source thrives when those who benefit can give back—even a small monthly contribution makes a real difference. Sponsorships help cover maintenance time, infrastructure, and the countless invisible tasks that keep a project healthy.

Your help truly matters.

💚 [Become a sponsor](https://github.com/sponsors/gfazioli?o=esc) today and help me keep this project reliable, up‑to‑date, and growing for everyone.

---
https://github.com/user-attachments/assets/de494ff9-5e3c-4026-bdc3-0402110917e7

---
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-rings-progress&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-rings-progress&Timeline)
