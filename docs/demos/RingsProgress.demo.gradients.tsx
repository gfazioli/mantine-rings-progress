import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  return (
    <Stack align="center" pb="md">
      <RingsProgress
        size={220}
        thickness={16}
        gap={6}
        rings={[
          { value: 80, color: 'red', gradient: { from: 'red', to: 'orange', deg: 45 } },
          { value: 65, color: 'cyan', gradient: { from: 'indigo', to: 'cyan', deg: 90 } },
          { value: 90, color: 'pink', gradient: { from: 'pink', to: 'violet', deg: 135 } },
        ]}
      />
    </Stack>
  );
}

const code = `
import { RingsProgress } from '@gfazioli/mantine-rings-progress';

function Demo() {
  return (
    <RingsProgress
      size={220}
      thickness={16}
      rings={[
        { value: 80, color: 'red', gradient: { from: 'red', to: 'orange', deg: 45 } },
        { value: 65, color: 'cyan', gradient: { from: 'indigo', to: 'cyan', deg: 90 } },
        { value: 90, color: 'pink', gradient: { from: 'pink', to: 'violet', deg: 135 } },
      ]}
    />
  );
}
`;

export const gradients: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
