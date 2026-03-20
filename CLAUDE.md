# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@gfazioli/mantine-rings-progress` is a Mantine UI extension that renders multiple concentric ring progress indicators — inspired by Apple Watch activity rings. It uses the native `RingProgress` from `@mantine/core` and wraps multiple instances inside a `RingsProgress` component with configurable gap, thickness, per-ring customization, animations, glow effects, and accessibility.

## Commands

| Command | Description |
|---------|-------------|
| `yarn build` | Build the npm package via Rollup (outputs to `package/dist/`) |
| `yarn dev` | Start the Next.js docs dev server on port 9281 |
| `yarn test` | Full test suite: syncpack + prettier + typecheck + lint + jest |
| `yarn jest` | Run only Jest tests |
| `yarn jest --testPathPattern=RingsProgress` | Run a single test file |
| `yarn docgen` | Generate component API docs (`docgen.json`) |
| `yarn docs:build` | Build the documentation site |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn clean && yarn build` | Clean rebuild |
| `yarn prettier:write` | Auto-fix formatting issues |
| `yarn eslint` | Run ESLint |
| `yarn typecheck` | TypeScript type checking (root + docs) |
| `diny yolo` | AI-assisted auto-commit (stages all, generates message, commits) |

## Architecture

This repo uses **yarn workspaces** with two packages: `docs` (Next.js documentation site) and `package` (the published npm component).

### Component Structure

The package exports a single main component `RingsProgress` which uses the native Mantine `RingProgress`:

- **`package/src/RingsProgress.tsx`** — Main component. Uses Mantine's `factory()` pattern. Takes a `rings` array and renders multiple native `RingProgress` instances (from `@mantine/core`) with decreasing sizes and positional offsets to create concentric rings.
- **`package/src/RingsProgress.module.css`** — Styles for root positioning, label centering, and pulse animation keyframes.

### Build Pipeline

Rollup builds both ESM (`.mjs`) and CJS (`.cjs`) outputs. CSS modules use `hash-css-selector` with the `me` prefix for scoped class names. Non-index chunks are prefixed with `'use client'`.

### Testing

Jest with `jsdom` environment, `esbuild-jest` for TypeScript transforms, `identity-obj-proxy` for CSS modules. Tests use `@testing-library/react` with `MantineProvider` wrapper.

### Key Patterns

- Components use Mantine's `factory()` / `useProps()` / `useStyles()` API for consistent theming and styles API support.
- The `RingsProgress` component positions inner rings absolutely; each ring's offset is computed cumulatively to support per-ring thickness.
- Entrance animation uses `useState` + `requestAnimationFrame` (or staggered `setTimeout`) with CSS `transitionDuration` on the native `RingProgress`.
- Glow effect via CSS `filter: drop-shadow()` on the SVG element.
- Unified tooltip wraps the entire component with `Tooltip.Floating`.
- Accessibility: `role="group"` on root, `role="progressbar"` with ARIA attributes on each ring, `useReducedMotion` support.
