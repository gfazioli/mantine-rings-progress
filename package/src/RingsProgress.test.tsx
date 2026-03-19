import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { RingsProgress } from './RingsProgress';

function TestWrapper({ children }: { children: React.ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>;
}

describe('RingsProgress', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <RingsProgress
        rings={[
          { value: 20, color: 'green' },
          { value: 80, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  it('renders correct number of RingProgress elements', () => {
    const { container } = render(
      <RingsProgress
        rings={[
          { value: 20, color: 'green' },
          { value: 50, color: 'red' },
          { value: 80, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    const svgs = container.querySelectorAll('svg');
    expect(svgs).toHaveLength(3);
  });

  it('renders label only in the innermost ring', () => {
    render(
      <RingsProgress
        rings={[
          { value: 20, color: 'green' },
          { value: 80, color: 'blue' },
        ]}
        label={<span data-testid="ring-label">Hello</span>}
      />,
      { wrapper: TestWrapper }
    );
    const labels = screen.getAllByTestId('ring-label');
    expect(labels).toHaveLength(1);
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<RingsProgress ref={ref} rings={[{ value: 50, color: 'cyan' }]} />, {
      wrapper: TestWrapper,
    });
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders with custom size, gap, and thickness props', () => {
    const { container } = render(
      <RingsProgress
        size={200}
        gap={10}
        thickness={16}
        rings={[
          { value: 50, color: 'cyan' },
          { value: 30, color: 'red' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container.firstElementChild).toBeTruthy();
  });

  it('renders with animate prop without errors', () => {
    const { container } = render(
      <RingsProgress
        animate
        transitionDuration={500}
        rings={[
          { value: 40, color: 'green' },
          { value: 60, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });
});
