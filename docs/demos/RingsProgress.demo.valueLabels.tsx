import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import { Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  return (
    <Stack align="center" pb="md">
      <RingsProgress
        size={220}
        thickness={14}
        gap={8}
        showValues
        rings={[
          { value: 75, color: 'red' },
          { value: 50, color: 'green' },
          { value: 90, color: 'cyan' },
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
      thickness={14}
      gap={8}
      showValues
      formatValue={(v) => \`\${Math.round(v)}%\`}
      rings={[
        { value: 75, color: 'red' },
        { value: 50, color: 'green' },
        // Per-ring override:
        { value: 90, color: 'cyan', formatValue: (v) => \`\${v} / 100\` },
      ]}
    />
  );
}
`;

export const valueLabels: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
