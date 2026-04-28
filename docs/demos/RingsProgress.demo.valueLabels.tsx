import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Button, Group, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { useState } from 'react';

const COLORS = ['red', 'green', 'cyan'] as const;

function randomTriple() {
  return COLORS.map((color) => ({
    value: Math.round(Math.random() * 100),
    color,
  }));
}

function Wrapper() {
  const [rings, setRings] = useState(() => [
    { value: 75, color: 'red' },
    { value: 50, color: 'green' },
    { value: 90, color: 'cyan' },
  ]);

  return (
    <Stack align="center" pb="md">
      <Group>
        <Button onClick={() => setRings(randomTriple())}>Randomize values</Button>
        <Button variant="subtle" onClick={() => setRings(rings.map((r) => ({ ...r, value: 100 })))}>
          Fill all
        </Button>
        <Button variant="subtle" onClick={() => setRings(rings.map((r) => ({ ...r, value: 0 })))}>
          Reset
        </Button>
      </Group>
      <RingsProgress
        size={220}
        thickness={14}
        gap={8}
        showValues
        animateValueChanges
        transitionDuration={700}
        rings={rings}
      />
    </Stack>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Button, Stack } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [rings, setRings] = useState([
    { value: 75, color: 'red' },
    { value: 50, color: 'green' },
    { value: 90, color: 'cyan' },
  ]);

  const randomize = () =>
    setRings(rings.map((r) => ({ ...r, value: Math.round(Math.random() * 100) })));

  return (
    <Stack align="center">
      <Button onClick={randomize}>Randomize values</Button>
      <RingsProgress
        showValues
        animateValueChanges
        transitionDuration={700}
        formatValue={(v) => \`\${Math.round(v)}%\`}
        rings={rings}
      />
    </Stack>
  );
}
`;

export const valueLabels: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
