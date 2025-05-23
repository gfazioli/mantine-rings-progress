import { tests } from '@mantine-tests/core';
import { RingProgress, RingProgressProps, RingProgressStylesNames } from './RingProgress';

const defaultProps: RingProgressProps = {
  size: 100,
  thickness: 10,
  label: 'test',
  sections: [{ value: 20, color: 'orange' }],
};

describe('RingProgress', () => {
  tests.itSupportsSystemProps<RingProgressProps, RingProgressStylesNames>({
    component: RingProgress,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: 'RingProgress',
    stylesApiSelectors: ['root', 'svg', 'curve', 'label'],
  });
});
