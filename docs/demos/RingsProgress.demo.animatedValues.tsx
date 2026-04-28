import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Box, Button, Group, Stack, Text } from '@mantine/core';
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
    <Stack align="center" gap="lg" pb="md">
      <Group justify="center">
        <Button onClick={() => setRings(randomTriple())}>Randomize values</Button>
        <Button variant="subtle" onClick={() => setRings(rings.map((r) => ({ ...r, value: 100 })))}>
          Fill all
        </Button>
        <Button variant="subtle" onClick={() => setRings(rings.map((r) => ({ ...r, value: 0 })))}>
          Reset
        </Button>
      </Group>
      <Group align="flex-start" gap={48} justify="center">
        <Stack align="center" gap={4}>
          <Text size="sm" fw={600}>
            animate
          </Text>
          <Text size="xs" c="dimmed">
            entrance only — value changes snap
          </Text>
          <Box mt={8}>
            <RingsProgress size={160} thickness={12} gap={8} animate rings={rings} />
          </Box>
        </Stack>
        <Stack align="center" gap={4}>
          <Text size="sm" fw={600}>
            animate + animateValueChanges
          </Text>
          <Text size="xs" c="dimmed">
            entrance + every value change interpolates (500 ms default)
          </Text>
          <Box mt={8}>
            <RingsProgress
              size={160}
              thickness={12}
              gap={8}
              animate
              animateValueChanges
              rings={rings}
            />
          </Box>
        </Stack>
      </Group>
    </Stack>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Button, Group, Stack } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [rings, setRings] = useState([
    { value: 30, color: 'red' },
    { value: 60, color: 'green' },
    { value: 90, color: 'cyan' },
  ]);

  const randomize = () =>
    setRings(rings.map((r) => ({ ...r, value: Math.round(Math.random() * 100) })));

  return (
    <Stack align="center">
      <Button onClick={randomize}>Randomize values</Button>
      <Group>
        {/* Entrance animation only — value changes snap */}
        <RingsProgress animate rings={rings} />

        {/* Entrance + smoothly animates each value change (500 ms default) */}
        <RingsProgress animate animateValueChanges rings={rings} />
      </Group>
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
