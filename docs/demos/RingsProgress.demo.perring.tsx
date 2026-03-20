import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Box, Center } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const rings = [
    { value: 40, color: 'cyan', thickness: 18 },
    { value: 65, color: 'red', thickness: 10 },
    { value: 90, color: '#f90', thickness: 6 },
  ];

  return (
    <Center>
      <Box h={180} w={180}>
        <RingsProgress size={180} rings={rings} />
      </Box>
    </Center>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';

function Demo() {
  const rings = [
    { value: 40, color: 'cyan', thickness: 18 },
    { value: 65, color: 'red', thickness: 10 },
    { value: 90, color: '#f90', thickness: 6 },
  ];

  return (
    <RingsProgress size={180} rings={rings} />
  );
}
`;

export const perring: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
  defaultExpanded: false,
};
