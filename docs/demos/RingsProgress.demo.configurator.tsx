import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Box, Center } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  const rings = [
    { value: 20, color: 'cyan' },
    { value: 50, color: 'red' },
    { value: 80, color: '#f90' },
  ];

  return (
    <Box w="100%">
      <Center>
        <Box h={props.size} w={props.size}>
          <RingsProgress rings={rings} {...props} />
        </Box>
      </Center>
    </Box>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';

function Demo() {
  const rings = [
    { value: 20, color: 'cyan' },
    { value: 50, color: 'red' },
    { value: 80, color: '#f90' },
  ];

  return (
    <RingsProgress rings={rings}{{props}} />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  minHeight: 300,
  code,
  controls: [
    {
      prop: 'animate',
      type: 'boolean',

      initialValue: false,
      libraryValue: false,
    },
    {
      prop: 'roundCaps',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'size',
      type: 'number',
      min: 100,
      max: 640,
      initialValue: 180,
      libraryValue: 120,
    },
    {
      prop: 'gap',
      type: 'number',
      min: 1,
      max: 32,
      initialValue: 4,
      libraryValue: 4,
    },
    {
      prop: 'thickness',
      type: 'number',
      initialValue: 12,
      libraryValue: 12,
    },
    {
      prop: 'rootColorAlpha',
      type: 'number',
      min: 0,
      max: 1,
      step: 0.1,
      initialValue: 0.15,
      libraryValue: 0.15,
    },
    {
      prop: 'animationDuration',
      type: 'number',
      min: 100,
      max: 5000,
      step: 1,
      initialValue: 1000,
      libraryValue: 1000,
    },
    {
      prop: 'animationSteps',
      type: 'number',
      min: 10,
      max: 120,
      step: 1,
      initialValue: 60,
      libraryValue: 60,
    },
    {
      prop: 'animationTimingFunction',
      type: 'select',
      data: [
        'linear',
        'ease',
        'ease-in',
        'ease-out',
        'ease-in-out',
        'ease-in-cubic',
        'ease-out-cubic',
        'ease-in-out-cubic',
      ],
      initialValue: 'ease',
      libraryValue: 'ease',
    },
    {
      prop: 'label',
      type: 'string',
      initialValue: '',
      libraryValue: undefined,
    },
  ],
};
