import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { IconCheck } from '@tabler/icons-react';
import { ActionIcon, Box, Center, rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const rings = [{ value: 20, color: 'green' }];

  return (
    <Center>
      <Box h={100} w={100}>
        <RingsProgress
          size={100}
          rings={rings}
          label={
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
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
  const rings = [{ value: 20, color: 'green' }];

  return (
    <RingsProgress
      size={100}
      rings={rings}
      label={
        <ActionIcon color="teal" variant="light" radius="xl" size="xl">
          <IconCheck style={{ width: rem(22), height: rem(22) }} />
        </ActionIcon>
      }
    />
  );
}
`;

export const label: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
  defaultExpanded: false,
};
