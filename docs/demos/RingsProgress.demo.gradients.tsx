import { RingsProgress, type RingsProgressRing } from '@gfazioli/mantine-rings-progress';
import { Button, Group, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { useState } from 'react';

const PRESETS: Array<{ from: string; to: string; deg: number; color: string }> = [
  { from: 'red', to: 'orange', deg: 45, color: 'red' },
  { from: 'indigo', to: 'cyan', deg: 90, color: 'cyan' },
  { from: 'pink', to: 'violet', deg: 135, color: 'pink' },
  { from: 'lime', to: 'teal', deg: 60, color: 'lime' },
  { from: 'yellow', to: 'red', deg: 0, color: 'yellow' },
  { from: 'blue', to: 'cyan', deg: 120, color: 'blue' },
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildRings(): RingsProgressRing[] {
  return Array.from({ length: 3 }, () => {
    const preset = pick(PRESETS);
    return {
      value: Math.round(Math.random() * 100),
      color: preset.color,
      gradient: { from: preset.from, to: preset.to, deg: preset.deg },
    };
  });
}

function Wrapper() {
  const [rings, setRings] = useState<RingsProgressRing[]>(() => [
    { value: 80, color: 'red', gradient: { from: 'red', to: 'orange', deg: 45 } },
    { value: 65, color: 'cyan', gradient: { from: 'indigo', to: 'cyan', deg: 90 } },
    { value: 90, color: 'pink', gradient: { from: 'pink', to: 'violet', deg: 135 } },
  ]);

  return (
    <Stack align="center" pb="md">
      <Group>
        <Button onClick={() => setRings(buildRings())}>Randomize values</Button>
        <Button variant="subtle" onClick={() => setRings(rings.map((r) => ({ ...r, value: 100 })))}>
          Fill all
        </Button>
      </Group>
      <RingsProgress
        size={220}
        thickness={16}
        gap={6}
        animateValueChanges
        transitionDuration={700}
        rings={rings}
      />
    </Stack>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';

function Demo() {
  return (
    <RingsProgress
      size={220}
      thickness={16}
      rings={[
        { value: 80, color: 'red', gradient: { from: 'red', to: 'orange', deg: 45 } },
        { value: 65, color: 'cyan', gradient: { from: 'indigo', to: 'cyan', deg: 90 } },
        { value: 90, color: 'pink', gradient: { from: 'pink', to: 'violet', deg: 135 } },
      ]}
    />
  );
}
`;

export const gradients: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
