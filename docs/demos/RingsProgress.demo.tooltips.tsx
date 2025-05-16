import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { IconCheck } from '@tabler/icons-react';
import { ActionIcon, Box, Center, rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const rings = [
    { value: 20, color: 'green', tooltip: 'Fitness – 40 Gb' },
    { value: 80, color: 'blue', tooltip: 'Running – 50 minutes' },
  ];

  return (
    <Center>
      <Box h={140} w={140}>
        <RingsProgress
          size={140}
          rings={rings}
          label={
            <ActionIcon color="yellow" variant="filled" radius="xl" size="xl">
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          }
        />
      </Box>
    </Center>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';

function Demo() {
  const rings = [
    { value: 20, color: 'green', tooltip: 'Fitness – 40 Gb' },
    { value: 80, color: 'blue', tooltip: 'Running – 50 minutes' },
  ];

  return (
    <RingsProgress
      size={140}
      rings={rings}
      label={
        <ActionIcon color="yellow" variant="filled" radius="xl" size="xl">
          <IconCheck style={{ width: rem(22), height: rem(22) }} />
        </ActionIcon>
      }
    />
  );
}
`;

export const tooltips: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
  defaultExpanded: false,
};
