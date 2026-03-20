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

  it('renders label in the center', () => {
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

  // Per-ring customization
  it('supports per-ring thickness override', () => {
    const { container } = render(
      <RingsProgress
        size={200}
        thickness={12}
        rings={[
          { value: 50, color: 'green', thickness: 20 },
          { value: 80, color: 'blue', thickness: 8 },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    const svgs = container.querySelectorAll('svg');
    expect(svgs).toHaveLength(2);
  });

  it('supports per-ring roundCaps override', () => {
    const { container } = render(
      <RingsProgress
        roundCaps
        rings={[
          { value: 50, color: 'green', roundCaps: false },
          { value: 80, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container.firstElementChild).toBeTruthy();
  });

  // Staggered animation
  it('renders with staggerDelay prop without errors', () => {
    const { container } = render(
      <RingsProgress
        animate
        staggerDelay={200}
        rings={[
          { value: 40, color: 'green' },
          { value: 60, color: 'blue' },
          { value: 80, color: 'red' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  // Accessibility
  it('renders with role="group" and custom aria-label on root', () => {
    const { container } = render(
      <RingsProgress aria-label="Activity rings" rings={[{ value: 50, color: 'cyan' }]} />,
      { wrapper: TestWrapper }
    );
    const root = container.querySelector('[role="group"]') as HTMLElement;
    expect(root).toBeTruthy();
    expect(root?.getAttribute('aria-label')).toBe('Activity rings');
  });

  it('renders with role="progressbar" and aria attributes on each ring', () => {
    const { container } = render(
      <RingsProgress
        rings={[
          { value: 42, color: 'green' },
          { value: 78, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    const progressbars = container.querySelectorAll('[role="progressbar"]');
    expect(progressbars).toHaveLength(2);
    expect(progressbars[0].getAttribute('aria-valuenow')).toBe('42');
    expect(progressbars[0].getAttribute('aria-valuemin')).toBe('0');
    expect(progressbars[0].getAttribute('aria-valuemax')).toBe('100');
  });

  it('supports custom ariaLabel per ring', () => {
    const { container } = render(
      <RingsProgress
        rings={[
          { value: 50, color: 'green', ariaLabel: 'Move: 50%' },
          { value: 80, color: 'blue', ariaLabel: 'Exercise: 80%' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    const progressbars = container.querySelectorAll('[role="progressbar"]');
    expect(progressbars[0].getAttribute('aria-label')).toBe('Move: 50%');
    expect(progressbars[1].getAttribute('aria-label')).toBe('Exercise: 80%');
  });

  it('uses default aria-label "Progress rings" on root', () => {
    const { container } = render(<RingsProgress rings={[{ value: 50, color: 'cyan' }]} />, {
      wrapper: TestWrapper,
    });
    const root = container.querySelector('[role="group"]') as HTMLElement;
    expect(root).toBeTruthy();
    expect(root?.getAttribute('aria-label')).toBe('Progress rings');
  });

  // Tooltip props
  it('renders with tooltip on ring', () => {
    const { container } = render(
      <RingsProgress rings={[{ value: 50, color: 'cyan', tooltip: 'Half done' }]} />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  // Glow
  it('renders with glow effect', () => {
    const { container } = render(
      <RingsProgress
        glow
        rings={[
          { value: 50, color: 'green' },
          { value: 80, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  it('renders with numeric glow intensity', () => {
    const { container } = render(
      <RingsProgress
        glow={10}
        rings={[{ value: 50, color: 'green', glowIntensity: 15, glowColor: 'red' }]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  // Pulse on completion
  it('renders with pulseOnComplete', () => {
    const { container } = render(
      <RingsProgress pulseOnComplete rings={[{ value: 100, color: 'green' }]} />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  // Start angle and direction
  it('renders with custom startAngle', () => {
    const { container } = render(
      <RingsProgress startAngle={90} rings={[{ value: 50, color: 'cyan' }]} />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  it('renders with counterclockwise direction', () => {
    const { container } = render(
      <RingsProgress direction="counterclockwise" rings={[{ value: 50, color: 'cyan' }]} />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  // Per-ring rootColor
  it('renders with per-ring rootColor override', () => {
    const { container } = render(
      <RingsProgress
        rings={[
          { value: 50, color: 'green', rootColor: 'gray' },
          { value: 80, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  // onRingComplete callback
  it('renders with onRingComplete prop', () => {
    const onComplete = jest.fn();
    const { container } = render(
      <RingsProgress onRingComplete={onComplete} rings={[{ value: 100, color: 'green' }]} />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });
});
