# Mantine Rings Progress Component

<img width="2752" height="1536" alt="Mantine Rings Progress" src="https://github.com/user-attachments/assets/5eb092d8-44a4-4829-bbc9-299b5ebdabc3" />

<div align="center">
  
  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[Mantine Rings Progress](https://gfazioli.github.io/mantine-rings-progress/) is a Mantine UI extension that enhances the RingProgress component to visualize multiple concurrent metrics as concentric rings in a single compact widget. Each ring is defined by a value and color, and the component accepts a richly customizable label—either plain text, emojis, or a fully composed React element—allowing you to present status or controls in the center. 

The package includes stylesheet imports (standard or within a CSS layer) to align visuals with Mantine, and discourages inline tooltips because they interfere with label readability. Beyond static displays, it can power dynamic scenarios like a countdown timer, using separate rings to represent minutes, seconds, and hundredths, with configurable size and thickness to fit dashboards, monitors, or compact cards.

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
    { value: 20, color: 'green' },
    { value: 80, color: 'blue' },
  ];

  return (
    <RingsProgress
      size={140}
      rings={rings}
      label={
        <ActionIcon color="yellow" variant="filled" radius="xl" size="xl">
          <IconCheck style={{ width: rem(22), height: rem(22) }} />
        </ActionIcon>
      }
    />
  );
}
```

---
https://github.com/user-attachments/assets/de494ff9-5e3c-4026-bdc3-0402110917e7

---
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-rings-progress&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-rings-progress&Timeline)
