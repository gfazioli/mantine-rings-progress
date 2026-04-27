import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { ActionIcon, Box, Center, Group, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { IconRefresh } from '@tabler/icons-react';
import { useState } from 'react';

function Wrapper(props: any) {
  const [key, setKey] = useState(0);

  const rings = [
    { value: 20, color: 'cyan' },
    { value: 50, color: 'red' },
    { value: 80, color: '#f90' },
  ];

  return (
    <Box w="100%">
      <Center>
        <Box h={props.size} w={props.size} pos="relative">
          <RingsProgress key={key} rings={rings} {...props} />
          {props.animate && (
            <Group pos="absolute" bottom={-36} left={0} right={0} justify="center">
              <Tooltip label="Replay animation">
                <ActionIcon variant="subtle" size="sm" onClick={() => setKey((k) => k + 1)}>
                  <IconRefresh size={16} />
                </ActionIcon>
              </Tooltip>
            </Group>
          )}
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
      prop: 'transitionDuration',
      type: 'number',
      min: 0,
      max: 5000,
      step: 100,
      initialValue: 1000,
      libraryValue: 0,
    },
    {
      prop: 'staggerDelay',
      type: 'number',
      min: 0,
      max: 1000,
      step: 50,
      initialValue: 0,
      libraryValue: 0,
    },
    {
      prop: 'glow',
      type: 'number',
      min: 0,
      max: 30,
      step: 1,
      initialValue: 0,
      libraryValue: 0,
    },
    {
      prop: 'startAngle',
      type: 'number',
      min: 0,
      max: 360,
      step: 15,
      initialValue: 0,
      libraryValue: 0,
    },
    {
      prop: 'direction',
      type: 'select',
      data: ['clockwise', 'counterclockwise'],
      initialValue: 'clockwise',
      libraryValue: 'clockwise',
    },
    {
      prop: 'label',
      type: 'string',
      initialValue: '',
      libraryValue: undefined,
    },
  ],
};
