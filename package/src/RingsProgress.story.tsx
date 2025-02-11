import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { ActionIcon, rem } from '@mantine/core';
import { RingsProgress } from './RingsProgress';

export default {
  title: 'RingsProgress',
  args: {
    size: 200,
    thickness: 12,
    gap: 4,
    rootColorAlpha: 0.15,
    animate: false,
    roundCaps: true,
    animationDuration: 1000,
    animationSteps: 60,
    animationTimingFunction: 'ease',
    label: null,
  },
  argTypes: {
    size: { control: { type: 'range', min: 32, max: 480, step: 10 } },
    thickness: { control: { type: 'range', min: 1, max: 64, step: 2 } },
    gap: { control: { type: 'range', min: 0, max: 64, step: 2 } },
    rootColorAlpha: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    animate: { control: { type: 'boolean' } },
    roundCaps: { control: { type: 'boolean' } },
    animationDuration: { control: { type: 'range', min: 100, max: 2000, step: 100 } },
    animationSteps: { control: { type: 'range', min: 10, max: 120, step: 10 } },
    animationTimingFunction: {
      options: [
        'linear',
        'ease',
        'ease-in',
        'ease-out',
        'ease-in-out',
        'ease-in-cubic',
        'ease-out-cubic',
        'ease-in-out-cubic',
      ],
      control: {
        type: 'select',
      },
    },
    label: { control: { type: 'text' } },
  },
};

export function Usage(p: any) {
  const rings = [
    { value: 20, color: 'cyan', tooltip: 'Fitness – 40 Gb' },
    { value: 50, color: 'red', tooltip: 'Running – 50 minutes' },
    { value: 80, color: '#f90', tooltip: 'Orange ' },
  ];

  return (
    <div style={{ padding: 40 }}>
      <RingsProgress
        rings={rings}
        animate={p.animate}
        roundCaps={p.roundCaps}
        animationDuration={p.animationDuration}
        animationSteps={p.animationSteps}
        animationTimingFunction={p.animationTimingFunction}
        label={p.label}
        size={p.size}
        thickness={p.thickness}
        gap={p.gap}
        rootColorAlpha={p.rootColorAlpha}
      />
    </div>
  );
}

export function Label(p: any) {
  const rings = [{ value: 50, color: 'cyan', tooltip: 'Running – 50 minutes' }];

  return (
    <div style={{ padding: 40 }}>
      <RingsProgress
        rings={rings}
        animate={p.animate}
        roundCaps={p.roundCaps}
        animationDuration={p.animationDuration}
        animationSteps={p.animationSteps}
        animationTimingFunction={p.animationTimingFunction}
        label={
          <ActionIcon color="teal" variant="light" radius="xl" size="xl">
            <IconCheck style={{ width: rem(22), height: rem(22) }} />
          </ActionIcon>
        }
        size={p.size}
        thickness={p.thickness}
        gap={p.gap}
        rootColorAlpha={p.rootColorAlpha}
      />
    </div>
  );
}
