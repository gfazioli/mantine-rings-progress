import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Box, Center } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const rings = [
    { value: 75, color: 'cyan' },
    { value: 50, color: '#ff6b6b' },
    { value: 90, color: '#ffd43b' },
  ];

  return (
    <Center>
      <Box h={180} w={180}>
        <RingsProgress size={180} glow={8} rings={rings} />
      </Box>
    </Center>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';

function Demo() {
  const rings = [
    { value: 75, color: 'cyan' },
    { value: 50, color: '#ff6b6b' },
    { value: 90, color: '#ffd43b' },
  ];

  return (
    <RingsProgress size={180} glow={8} rings={rings} />
  );
}
`;

export const glow: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
  defaultExpanded: false,
};
