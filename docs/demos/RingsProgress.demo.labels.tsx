import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { IconCheck } from '@tabler/icons-react';
import { ActionIcon, Box, Center, rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  const rings = [
    { value: 20, color: 'green' },
    { value: 80, color: 'blue' },
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
    { value: 20, color: 'green' },
    { value: 80, color: 'blue' },
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

export const labels: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
};
