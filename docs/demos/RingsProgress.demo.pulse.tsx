import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Box, Button, Center, Group, Slider, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { useState } from 'react';

function Wrapper() {
  const [move, setMove] = useState(72);
  const [exercise, setExercise] = useState(45);
  const [stand, setStand] = useState(88);

  const rings = [
    { value: move, color: '#fa5252' },
    { value: exercise, color: '#94d82d' },
    { value: stand, color: '#22b8cf' },
  ];

  return (
    <Stack gap="lg">
      <Center>
        <Box h={180} w={180}>
          <RingsProgress size={180} rings={rings} glow={4} pulseOnComplete />
        </Box>
      </Center>

      <Stack gap="xs" px="md">
        <Group gap="xs">
          <Text size="sm" w={70} c="#fa5252" fw={500}>
            Move
          </Text>
          <Slider flex={1} color="red" value={move} onChange={setMove} min={0} max={100} />
          <Text size="sm" w={40} ta="right">
            {move}%
          </Text>
        </Group>

        <Group gap="xs">
          <Text size="sm" w={70} c="#94d82d" fw={500}>
            Exercise
          </Text>
          <Slider flex={1} color="lime" value={exercise} onChange={setExercise} min={0} max={100} />
          <Text size="sm" w={40} ta="right">
            {exercise}%
          </Text>
        </Group>

        <Group gap="xs">
          <Text size="sm" w={70} c="#22b8cf" fw={500}>
            Stand
          </Text>
          <Slider flex={1} color="cyan" value={stand} onChange={setStand} min={0} max={100} />
          <Text size="sm" w={40} ta="right">
            {stand}%
          </Text>
        </Group>
      </Stack>

      <Center>
        <Button
          size="xs"
          variant="light"
          onClick={() => {
            setMove(100);
            setExercise(100);
            setStand(100);
          }}
        >
          Complete all rings
        </Button>
      </Center>
    </Stack>
  );
}

const code = `
import { useState } from 'react';
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Button, Slider, Stack, Text, Group } from '@mantine/core';

function Demo() {
  const [move, setMove] = useState(72);
  const [exercise, setExercise] = useState(45);
  const [stand, setStand] = useState(88);

  const rings = [
    { value: move, color: '#fa5252' },
    { value: exercise, color: '#94d82d' },
    { value: stand, color: '#22b8cf' },
  ];

  return (
    <Stack gap="lg">
      <RingsProgress size={180} rings={rings} glow={4} pulseOnComplete />

      <Group gap="xs">
        <Text size="sm" w={70}>Move</Text>
        <Slider flex={1} color="red" value={move} onChange={setMove} />
      </Group>

      <Group gap="xs">
        <Text size="sm" w={70}>Exercise</Text>
        <Slider flex={1} color="lime" value={exercise} onChange={setExercise} />
      </Group>

      <Group gap="xs">
        <Text size="sm" w={70}>Stand</Text>
        <Slider flex={1} color="cyan" value={stand} onChange={setStand} />
      </Group>

      <Button
        size="xs"
        variant="light"
        onClick={() => { setMove(100); setExercise(100); setStand(100); }}
      >
        Complete all rings
      </Button>
    </Stack>
  );
}
`;

export const pulse: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 300,
  code,
  defaultExpanded: false,
};
