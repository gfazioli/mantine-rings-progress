import { render, tests } from '@mantine-tests/core';
import React from 'react';
import { RingsProgress, RingsProgressProps, RingsProgressStylesNames } from './RingsProgress';

const defaultProps: RingsProgressProps = {
  rings: [],
};

describe('@mantine/core/Flip', () => {
  tests.itSupportsSystemProps<RingsProgressProps, RingsProgressStylesNames>({
    component: RingsProgress,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Flip',
    stylesApiSelectors: ['root'],
  });

  it('supports perspective prop', () => {
    const { container } = render(
      <RingsProgress size={120} rings={[{ value: 40, color: 'cyan' }]} />
    );
    expect(container.querySelector('.mantine-Flip-root')).toHaveStyle({ perspective: '500px' });
  });
});
