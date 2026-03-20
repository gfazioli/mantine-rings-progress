import { useState } from 'react';
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { IconRefresh } from '@tabler/icons-react';
import { ActionIcon, Box, Stack, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const [key, setKey] = useState(0);

  const rings = [
    { value: 75, color: 'green' },
    { value: 50, color: 'blue' },
    { value: 90, color: 'orange' },
  ];

  return (
    <Stack align="center" gap="md">
      <Box h={180} w={180}>
        <RingsProgress
          key={key}
          size={180}
          rings={rings}
          animate
          staggerDelay={300}
          transitionDuration={1000}
        />
      </Box>
      <Tooltip label="Replay animation">
        <ActionIcon variant="subtle" size="sm" onClick={() => setKey((k) => k + 1)}>
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Stack>
  );
}

const code = `
import { useState } from 'react';
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';

function Demo() {
  const [key, setKey] = useState(0);

  const rings = [
    { value: 75, color: 'green' },
    { value: 50, color: 'blue' },
    { value: 90, color: 'orange' },
  ];

  return (
    <>
      <RingsProgress
        key={key}
        size={180}
        rings={rings}
        animate
        staggerDelay={300}
        transitionDuration={1000}
      />
      <Tooltip label="Replay animation">
        <ActionIcon variant="subtle" onClick={() => setKey((k) => k + 1)}>
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
`;

export const stagger: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 240,
  code,
  defaultExpanded: false,
};
