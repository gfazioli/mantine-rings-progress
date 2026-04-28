import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Button, Group, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { useState } from 'react';

function randomTriple() {
  return [
    { value: Math.round(Math.random() * 100), color: 'red' },
    { value: Math.round(Math.random() * 100), color: 'green' },
    { value: Math.round(Math.random() * 100), color: 'cyan' },
  ];
}

function Wrapper() {
  const [rings, setRings] = useState(randomTriple());

  return (
    <Stack align="center" gap="md" pb="md">
      <Group>
        <Button variant="light" onClick={() => setRings(randomTriple())}>
          Randomize values
        </Button>
        <Button variant="subtle" onClick={() => setRings(rings.map((r) => ({ ...r, value: 100 })))}>
          Fill all
        </Button>
        <Button variant="subtle" onClick={() => setRings(rings.map((r) => ({ ...r, value: 0 })))}>
          Reset
        </Button>
      </Group>
      <RingsProgress
        size={180}
        thickness={14}
        gap={8}
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
    { value: 30, color: 'red' },
    { value: 60, color: 'green' },
    { value: 90, color: 'cyan' },
  ]);

  return (
    <Stack align="center" gap="md">
      <Button onClick={() => setRings(rings.map((r) => ({ ...r, value: Math.round(Math.random() * 100) })))}>
        Randomize values
      </Button>
      <RingsProgress
        animateValueChanges
        transitionDuration={700}
        rings={rings}
      />
    </Stack>
  );
}
`;

export const animatedValues: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
