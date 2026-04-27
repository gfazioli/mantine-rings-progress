import { ActionIcon, Button, rem, Slider, Stack } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import React, { useState } from 'react';
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
    transitionDuration: 0,
    staggerDelay: 0,
    glow: false,
    pulseOnComplete: false,
    startAngle: 0,
    direction: 'clockwise',
    label: null,
  },
  argTypes: {
    size: { control: { type: 'range', min: 32, max: 480, step: 10 } },
    thickness: { control: { type: 'range', min: 1, max: 64, step: 2 } },
    gap: { control: { type: 'range', min: 0, max: 64, step: 2 } },
    rootColorAlpha: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    animate: { control: { type: 'boolean' } },
    roundCaps: { control: { type: 'boolean' } },
    transitionDuration: { control: { type: 'range', min: 0, max: 5000, step: 100 } },
    staggerDelay: { control: { type: 'range', min: 0, max: 1000, step: 50 } },
    glow: { control: { type: 'range', min: 0, max: 30, step: 1 } },
    pulseOnComplete: { control: { type: 'boolean' } },
    startAngle: { control: { type: 'range', min: 0, max: 360, step: 15 } },
    direction: { options: ['clockwise', 'counterclockwise'], control: { type: 'select' } },
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
        transitionDuration={p.transitionDuration}
        staggerDelay={p.staggerDelay}
        glow={p.glow}
        pulseOnComplete={p.pulseOnComplete}
        startAngle={p.startAngle}
        direction={p.direction}
        label={p.label}
        size={p.size}
        thickness={p.thickness}
        gap={p.gap}
        rootColorAlpha={p.rootColorAlpha}
      />
    </div>
  );
}

export function GlowEffect() {
  return (
    <div style={{ padding: 40, background: '#1a1a2e' }}>
      <RingsProgress
        size={200}
        glow={8}
        rings={[
          { value: 75, color: 'cyan' },
          { value: 50, color: '#ff6b6b' },
          { value: 90, color: '#ffd43b' },
        ]}
      />
    </div>
  );
}

export function PulseOnComplete() {
  const [value, setValue] = useState(80);

  return (
    <Stack style={{ padding: 40 }} align="center">
      <RingsProgress size={200} pulseOnComplete rings={[{ value, color: 'green' }]} />
      <Slider w={200} value={value} onChange={setValue} min={0} max={100} />
      <Button size="xs" onClick={() => setValue(100)}>
        Set to 100%
      </Button>
    </Stack>
  );
}

export function StartAngleAndDirection(p: any) {
  return (
    <div style={{ padding: 40 }}>
      <RingsProgress
        size={200}
        startAngle={p.startAngle}
        direction={p.direction}
        rings={[
          { value: 40, color: 'cyan' },
          { value: 65, color: 'red' },
          { value: 90, color: '#f90' },
        ]}
      />
    </div>
  );
}

export function PerRingThickness(p: any) {
  const rings = [
    { value: 40, color: 'cyan', thickness: 18 },
    { value: 65, color: 'red', thickness: 10 },
    { value: 90, color: '#f90', thickness: 6 },
  ];

  return (
    <div style={{ padding: 40 }}>
      <RingsProgress rings={rings} size={p.size} gap={p.gap} rootColorAlpha={p.rootColorAlpha} />
    </div>
  );
}

export function StaggeredAnimation(p: any) {
  return (
    <div style={{ padding: 40 }}>
      <RingsProgress
        rings={[
          { value: 75, color: 'green' },
          { value: 50, color: 'blue' },
          { value: 90, color: 'orange' },
        ]}
        animate
        staggerDelay={300}
        transitionDuration={p.transitionDuration}
        roundCaps={p.roundCaps}
        size={p.size}
        thickness={p.thickness}
        gap={p.gap}
        rootColorAlpha={p.rootColorAlpha}
      />
    </div>
  );
}

export function Label(p: any) {
  return (
    <div style={{ padding: 40 }}>
      <RingsProgress
        rings={[{ value: 50, color: 'cyan', tooltip: 'Running – 50 minutes' }]}
        animate={p.animate}
        roundCaps={p.roundCaps}
        transitionDuration={p.transitionDuration}
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
