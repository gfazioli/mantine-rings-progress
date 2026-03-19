# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@gfazioli/mantine-rings-progress` is a Mantine UI extension that renders multiple concentric ring progress indicators. It wraps a custom fork of `RingProgress` (with animation support) inside a `RingsProgress` component that stacks rings with configurable gap, thickness, and root color alpha.

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

The package exports a single main component `RingsProgress` which internally uses a forked `RingProgress`:

- **`package/src/RingsProgress.tsx`** — Main component. Uses Mantine's `factory()` pattern. Takes a `rings` array and renders multiple `RingProgress` instances with decreasing sizes and positional offsets to create concentric rings.
- **`package/src/RingProgress/`** — Forked from Mantine's `RingProgress` with added animation support (`animate`, `animationDuration`, `animationSteps`, `animationTimingFunction`). This is NOT the standard Mantine component.
  - `RingProgress.tsx` — SVG-based ring with easing animation via `setInterval`
  - `Curve/` — SVG circle arc rendering and prop calculation
  - `get-curves/` — Logic for computing curve data from sections

### Build Pipeline

Rollup builds both ESM (`.mjs`) and CJS (`.cjs`) outputs. CSS modules use `hash-css-selector` with the `me` prefix for scoped class names. Non-index chunks are prefixed with `'use client'`.

### Testing

Jest with `jsdom` environment, `esbuild-jest` for TypeScript transforms, `identity-obj-proxy` for CSS modules. Tests use `@mantine-tests/core` and `@testing-library/react`.

### Key Patterns

- Components use Mantine's `factory()` / `useProps()` / `useStyles()` API for consistent theming and styles API support.
- The `RingsProgress` component positions inner rings absolutely; each ring's size shrinks by `(thickness + gap) * 2` per nesting level.
- CSS module files: `RingsProgress.module.css` (outer), `RingProgress.module.css` (inner).
