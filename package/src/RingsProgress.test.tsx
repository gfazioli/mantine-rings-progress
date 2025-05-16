import React from 'react';
import { render } from '@mantine-tests/core';
import { RingsProgress } from './RingsProgress';

describe('RingsProgress', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <RingsProgress
        rings={[
          { value: 20, color: 'green' },
          { value: 80, color: 'blue' },
        ]}
      />
    );
    expect(container).toBeTruthy();
  });
});
