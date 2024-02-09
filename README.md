# Mantine Rings Progress Component

<p align="center">
  <img alt="" src="https://github.com/gfazioli/mantine-rings-progress/assets/432181/cf1917a3-e7eb-4ecb-a525-85ff933c601d">
</p>

---

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-rings-progress">
    <img alt="NPM version" src="https://img.shields.io/npm/v/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge">
  </a>
  
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-rings-progress">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge">
  </a>

  <img alt="NPM License" src="https://img.shields.io/npm/l/%40gfazioli%2Fmantine-rings-progress?style=for-the-badge">

</p>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.
It allows for easy management of two separate views, such as in the cases of a registration form and a login form.
Essentially, when switching between views, the component will handle the flip animation.

## Installation

```sh
npm install @gfazioli/mantine-rings-progress
```
or 

```sh
yarn add @gfazioli/mantine-rings-progress
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

As you can see, the `Flip` component wraps two children, which are the two views that you want to flip between.
The `Flip.Target` component is used to define the trigger for the flip animation. It can be any component, such as a button, or a link, or even a div.

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




