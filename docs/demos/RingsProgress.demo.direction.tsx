import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Box, Group, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const rings = [
    { value: 40, color: 'cyan' },
    { value: 65, color: 'red' },
    { value: 90, color: '#f90' },
  ];

  return (
    <Group justify="center" gap="xl">
      <Stack align="center" gap="xs">
        <Box h={140} w={140}>
          <RingsProgress size={140} rings={rings} startAngle={90} />
        </Box>
        <Text size="sm" c="dimmed">
          startAngle=90
        </Text>
      </Stack>
      <Stack align="center" gap="xs">
        <Box h={140} w={140}>
          <RingsProgress size={140} rings={rings} direction="counterclockwise" />
        </Box>
        <Text size="sm" c="dimmed">
          counterclockwise
        </Text>
      </Stack>
    </Group>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Group } from '@mantine/core';

function Demo() {
  const rings = [
    { value: 40, color: 'cyan' },
    { value: 65, color: 'red' },
    { value: 90, color: '#f90' },
  ];

  return (
    <Group justify="center" gap="xl">
      <RingsProgress size={140} rings={rings} startAngle={90} />
      <RingsProgress size={140} rings={rings} direction="counterclockwise" />
    </Group>
  );
}
`;

export const direction: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
  defaultExpanded: false,
};
