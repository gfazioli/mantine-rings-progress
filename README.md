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

[![Mantine UI Library](https://img.shields.io/badge/-MANTINE_UI_LIBRARY-blue?style=for-the-badge&labelColor=black&logo=mantine
)](https://mantine.dev/)

Display progress with animated rings like the Apple Watch activity app.

[![Mantine Extensions](https://img.shields.io/badge/-Watch_the_Video-blue?style=for-the-badge&labelColor=black&logo=youtube
)](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4)
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

<div align="center">
  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-rings-progress&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-rings-progress&Timeline)
  
</div>

https://github.com/user-attachments/assets/de494ff9-5e3c-4026-bdc3-0402110917e7
