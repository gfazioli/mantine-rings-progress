import { RingsProgress, type RingsProgressRing } from '@gfazioli/mantine-rings-progress';
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

  // The ring that drives the centre label and the badge below.
  const focused = hovered ?? selected;
  const focusedActivity = focused !== null ? ACTIVITIES[focused] : null;

  // Per-ring config: hover lights up the ring with a glow, others stay dim.
  const rings: RingsProgressRing[] = ACTIVITIES.map((activity, index) => ({
    value: activity.value,
    color: activity.color,
    glowIntensity: hovered === index ? 12 : 0,
    onClick: () => setSelected((current) => (current === index ? null : index)),
    onHover: (_ring, _i, isHovered) => setHovered(isHovered ? index : null),
  }));

  return (
    <Stack align="center" gap="md">
      <Center>
        <RingsProgress
          size={200}
          thickness={14}
          gap={8}
          rings={rings}
          animate
          label={
            focusedActivity ? (
              <Stack gap={0} align="center">
                <Text fw={700} c={focusedActivity.color}>
                  {focusedActivity.value}%
                </Text>
                <Text size="xs" c="dimmed">
                  {focusedActivity.name}
                </Text>
              </Stack>
            ) : (
              <Text size="xs" c="dimmed">
                hover a ring
              </Text>
            )
          }
        />
      </Center>
      {selected !== null ? (
        <Badge color={ACTIVITIES[selected].color} size="lg" variant="filled">
          Selected: {ACTIVITIES[selected].name} — {ACTIVITIES[selected].detail}
        </Badge>
      ) : (
        <Text size="sm" c="dimmed">
          Click a ring to pin it; click again to unpin.
        </Text>
      )}
    </Stack>
  );
}

const code = `
import { RingsProgress, type RingsProgressRing } from '@gfazioli/mantine-rings-progress';
import { Badge, Center, Stack, Text } from '@mantine/core';
import { useState } from 'react';

const ACTIVITIES = [
  { name: 'Move', value: 75, color: 'red', detail: '450 / 600 kcal' },
  { name: 'Exercise', value: 50, color: 'green', detail: '15 / 30 min' },
  { name: 'Stand', value: 90, color: 'cyan', detail: '11 / 12 hours' },
];

function Demo() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const focused = hovered ?? selected;
  const focusedActivity = focused !== null ? ACTIVITIES[focused] : null;

  const rings: RingsProgressRing[] = ACTIVITIES.map((activity, index) => ({
    value: activity.value,
    color: activity.color,
    glowIntensity: hovered === index ? 12 : 0,
    onClick: () => setSelected((current) => (current === index ? null : index)),
    onHover: (_ring, _i, isHovered) => setHovered(isHovered ? index : null),
  }));

  return (
    <RingsProgress
      size={200}
      thickness={14}
      gap={8}
      rings={rings}
      label={
        focusedActivity ? (
          <Stack gap={0} align="center">
            <Text fw={700} c={focusedActivity.color}>{focusedActivity.value}%</Text>
            <Text size="xs" c="dimmed">{focusedActivity.name}</Text>
          </Stack>
        ) : <Text size="xs" c="dimmed">hover a ring</Text>
      }
    />
  );
}
`;

export const interactive: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
