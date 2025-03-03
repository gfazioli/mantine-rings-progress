# Mantine Rings Progress Component

<div align="center">
  
  ![Image](https://github.com/gfazioli/mantine-rings-progress/assets/432181/d3752711-6bae-43bc-9f8c-8e5c7bfc21ba)

</div>

---

<div align="center">
  
  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-rings-progress)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[![Mantine UI Library](https://img.shields.io/badge/-MANTINE_UI_LIBRARY-blue?style=for-the-badge&labelColor=black&logo=mantine
)](https://mantine.dev/)

Display progress with animated rings like the Apple Watch activity app.

[![Demo and Documentation](https://img.shields.io/badge/-Demo_%26_Documentation-blue?style=for-the-badge&labelColor=black&logo=typescript
)](https://gfazioli.github.io/mantine-rings-progress/)
[![Mantine Extensions HUB](https://img.shields.io/badge/-Mantine_Extensions_Hub-blue?style=for-the-badge&labelColor=blue
)](https://mantine-extensions.vercel.app/)


👉 You can find more components on the [Mantine Extensions Hub](https://mantine-extensions.vercel.app/) library.

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

## Props

| Name                      | Type                                 | Description                                                             |
|---------------------------|--------------------------------------|-------------------------------------------------------------------------|
| animate                   | boolean                              | Animate                                                                 |
| animationDuration         | number                               | Animation duration in ms                                                |
| animationSteps            | number                               | Animation steps                                                         |
| animationTimingFunction   | linear \| ease \| ease-in \| ease-out \| ease-in-out \| ease-in-cubic \| ease-out-cubic \| ease-in-out-cubic  | Animation timing function                                        |
| gap                       | number                               | Gap between rings                                                        |
| label                     | React.ReactNode                      | Label displayed in the center of the ring                                |
| rings *                   | RingProgressSection[]                 | List of the rings                                                        |
| rootColor                 | MantineColor                          | Color of the root section, key of theme.colors or CSS color value        |
| rootColorAlpha            | number                               | Root color alpha                                                         |
| roundCaps                 | boolean                              | Sets whether the edges of the progress circle are rounded                |
| size                      | number                               | Width and height of the progress ring                                     |
| thickness                 | number                               | Ring thickness                                                           |




