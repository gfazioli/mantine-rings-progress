# CLAUDE.md

## Project
`@gfazioli/mantine-rings-progress` renders multiple concentric ring progress indicators inspired by Apple Watch activity rings. It wraps Mantine's native `RingProgress` with configurable gap, thickness, per-ring customization, animations, glow effects, and accessibility.

## Commands
| Command | Purpose |
|---------|---------|
| `yarn build` | Build the npm package via Rollup |
| `yarn dev` | Start the Next.js docs dev server (port 9281) |
| `yarn test` | Full test suite (syncpack + oxfmt + typecheck + lint + jest) |
| `yarn jest` | Run only Jest unit tests |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn docs:build` | Build the Next.js docs site for production |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn lint` | Run oxlint + Stylelint |
| `yarn format:write` | Format all files with oxfmt |
| `yarn storybook` | Start Storybook dev server |
| `yarn clean` | Remove build artifacts |
| `yarn release:patch` | Bump patch version and deploy docs |
| `diny yolo` | AI-assisted commit (stage all, generate message, commit + push) |

> **Important**: After changing the public API, always run `yarn clean && yarn build` before `yarn test`.

## Architecture

### Workspace Layout
Yarn workspaces monorepo with two workspaces: `package/` (npm package) and `docs/` (Next.js 15 documentation site).

### Package Source (`package/src/`)
- `RingsProgress.tsx` -- Main component using Mantine's `factory()` pattern. Takes a `rings` array and renders multiple native `RingProgress` instances with decreasing sizes and positional offsets to create concentric rings.
- `RingsProgress.module.css` -- Styles for root positioning, label centering, and pulse animation keyframes.
- `index.ts` -- Public exports (component + types).

### Build Pipeline
Rollup bundles to dual ESM/CJS with `'use client'` banner. CSS modules hashed with `hash-css-selector` (prefix `me`). TypeScript declarations via `rollup-plugin-dts`. CSS split into `styles.css` and `styles.layer.css`.

## Component Details
- Inner rings are positioned absolutely; each ring's offset is computed cumulatively to support per-ring thickness.
- Entrance animation uses `useState` + `requestAnimationFrame` (or staggered `setTimeout`) with CSS `transitionDuration` on the native `RingProgress`.
- Glow effect via CSS `filter: drop-shadow()` on the SVG element.
- Unified tooltip wraps the entire component with `Tooltip.Floating`.
- Accessibility: `role="group"` on root, `role="progressbar"` with ARIA attributes on each ring, `useReducedMotion` support.

## Testing
Jest with `jsdom`, `esbuild-jest` transform, CSS mocked via `identity-obj-proxy`. Tests use `@mantine-tests/core` render helper.

## Ecosystem
This repo is part of the Mantine Extensions ecosystem, derived from the `mantine-base-component` template. See the workspace `CLAUDE.md` (in the parent directory) for:
- Development checklist (code -> test -> build -> docs -> release)
- Cross-cutting patterns (compound components, responsive CSS, GitHub sync)
- Update packages workflow
- Release process
