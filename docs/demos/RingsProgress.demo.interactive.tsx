import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Badge, Center, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { useState } from 'react';

const ACTIVITIES = [
  { name: 'Move', value: 75, color: 'red', detail: '450 / 600 kcal' },
  { name: 'Exercise', value: 50, color: 'green', detail: '15 / 30 min' },
  { name: 'Stand', value: 90, color: 'cyan', detail: '11 / 12 hours' },
];

function Wrapper() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const rings = ACTIVITIES.map((activity, index) => ({
    value: activity.value,
    color: activity.color,
    onClick: () => setSelected(index),
    onHover: (_ring: any, _i: number, isHovered: boolean) => setHovered(isHovered ? index : null),
  }));

  const focused = selected ?? hovered;
  const focusedActivity = focused !== null ? ACTIVITIES[focused] : null;

  return (
    <Stack align="center" gap="md">
      <Center w="100%">
        <RingsProgress size={180} rings={rings} animate />
      </Center>
      {focusedActivity ? (
        <Stack gap={4} align="center">
          <Badge color={focusedActivity.color} size="lg">
            {focusedActivity.name}
          </Badge>
          <Text size="sm" c="dimmed">
            {focusedActivity.detail}
          </Text>
          {selected !== null && (
            <Text size="xs" c="dimmed">
              Click again to change selection
            </Text>
          )}
        </Stack>
      ) : (
        <Text size="sm" c="dimmed">
          Hover or click a ring to inspect it
        </Text>
      )}
    </Stack>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { useState } from 'react';

const ACTIVITIES = [
  { name: 'Move', value: 75, color: 'red', detail: '450 / 600 kcal' },
  { name: 'Exercise', value: 50, color: 'green', detail: '15 / 30 min' },
  { name: 'Stand', value: 90, color: 'cyan', detail: '11 / 12 hours' },
];

function Demo() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const rings = ACTIVITIES.map((activity, index) => ({
    value: activity.value,
    color: activity.color,
    onClick: () => setSelected(index),
    onHover: (_ring, _i, isHovered) => setHovered(isHovered ? index : null),
  }));

  const focused = selected ?? hovered;
  const focusedActivity = focused !== null ? ACTIVITIES[focused] : null;

  return (
    <RingsProgress size={180} rings={rings} />
    /* Render \`focusedActivity\` somewhere in your UI */
  );
}
`;

export const interactive: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
