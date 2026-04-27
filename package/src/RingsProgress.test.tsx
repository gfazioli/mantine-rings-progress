import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
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

  // Unified tooltip
  it('renders with withTooltip', () => {
    const { container } = render(
      <RingsProgress
        withTooltip
        rings={[
          { value: 50, color: 'green', tooltip: 'Move' },
          { value: 80, color: 'blue' },
        ]}
      />,
      { wrapper: TestWrapper }
    );
    expect(container).toBeTruthy();
  });

  // Per-ring interaction callbacks (#19) — mouse path uses geometric hit-testing
  // on the outer container (since each ring's wrapper rectangle overlaps the inner
  // ones). Keyboard path keeps role/tabIndex on the individual ring rectangles for
  // Tab navigation + Enter/Space activation.
  describe('per-ring interaction (#19)', () => {
    // Mock the container rect so coordinates are deterministic in jsdom.
    const SIZE = 200;
    function mockContainerRect(container: HTMLElement) {
      const root = container.querySelector('[role="group"]') as HTMLElement;
      // Root sits at top-left of the document; size matches the prop.
      root.getBoundingClientRect = () =>
        ({
          left: 0,
          top: 0,
          right: SIZE,
          bottom: SIZE,
          width: SIZE,
          height: SIZE,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        }) as DOMRect;
      return root;
    }

    it('marks the container as interactive when at least one ring has a callback', () => {
      const { container } = render(
        <RingsProgress
          size={SIZE}
          rings={[
            { value: 80, color: 'blue', onClick: () => {} },
            { value: 50, color: 'red' },
          ]}
        />,
        { wrapper: TestWrapper }
      );
      const root = container.querySelector('[role="group"]') as HTMLElement;
      expect(root.getAttribute('data-interactive')).toBe('true');
    });

    it('does not mark the container as interactive when no ring has callbacks', () => {
      const { container } = render(
        <RingsProgress size={SIZE} rings={[{ value: 80, color: 'blue' }]} />,
        { wrapper: TestWrapper }
      );
      const root = container.querySelector('[role="group"]') as HTMLElement;
      expect(root.hasAttribute('data-interactive')).toBe(false);
    });

    it('fires onClick on the ring under the cursor (geometric hit-test)', () => {
      const onClick = jest.fn();
      const rings = [
        { value: 80, color: 'blue', onClick }, // outer ring
        { value: 50, color: 'red' },
      ];
      const { container } = render(
        <RingsProgress size={SIZE} thickness={12} gap={4} rings={rings} />,
        { wrapper: TestWrapper }
      );
      const root = mockContainerRect(container);
      // Click on the outer ring's stroke: x = 200 (right edge), y = 100 (centre).
      // Centre is (100, 100), so r ≈ 100 — well inside the outer ring band.
      fireEvent.click(root, { clientX: 196, clientY: 100 });
      expect(onClick).toHaveBeenCalledWith(rings[0], 0);
    });

    it('does not fire onClick when the cursor is in the empty centre or outside any band', () => {
      const onClick = jest.fn();
      const { container } = render(
        <RingsProgress
          size={SIZE}
          thickness={12}
          gap={4}
          rings={[{ value: 80, color: 'blue', onClick }]}
        />,
        { wrapper: TestWrapper }
      );
      const root = mockContainerRect(container);
      // Dead centre — far inside the inner empty area.
      fireEvent.click(root, { clientX: 100, clientY: 100 });
      expect(onClick).not.toHaveBeenCalled();
    });

    it('fires onHover with true on enter and false on leave / cross-ring transition', () => {
      const outerHover = jest.fn();
      const innerHover = jest.fn();
      const rings = [
        { value: 80, color: 'blue', onHover: outerHover },
        { value: 50, color: 'red', onHover: innerHover },
      ];
      const { container } = render(
        <RingsProgress size={SIZE} thickness={12} gap={4} rings={rings} />,
        { wrapper: TestWrapper }
      );
      const root = mockContainerRect(container);

      // Enter the outer ring stroke.
      fireEvent.mouseMove(root, { clientX: 196, clientY: 100 });
      // Move to the inner ring stroke (smaller radius — outer thickness=12, gap=4).
      fireEvent.mouseMove(root, { clientX: 178, clientY: 100 });
      // Leave the component entirely.
      fireEvent.mouseLeave(root);

      expect(outerHover).toHaveBeenCalledWith(rings[0], 0, true);
      expect(outerHover).toHaveBeenCalledWith(rings[0], 0, false);
      expect(innerHover).toHaveBeenCalledWith(rings[1], 1, true);
      expect(innerHover).toHaveBeenCalledWith(rings[1], 1, false);
    });

    it('keeps each ring with onClick keyboard-focusable for Tab + Enter activation', () => {
      const onClick = jest.fn();
      const { container } = render(
        <RingsProgress
          size={SIZE}
          rings={[
            { value: 80, color: 'blue', onClick },
            { value: 50, color: 'red' },
          ]}
        />,
        { wrapper: TestWrapper }
      );
      const buttons = container.querySelectorAll('[role="button"]');
      expect(buttons).toHaveLength(1);
      const interactiveRing = buttons[0] as HTMLElement;
      expect(interactiveRing.getAttribute('tabIndex')).toBe('0');

      fireEvent.keyDown(interactiveRing, { key: 'Enter' });
      expect(onClick).toHaveBeenCalledTimes(1);

      fireEvent.keyDown(interactiveRing, { key: ' ' });
      expect(onClick).toHaveBeenCalledTimes(2);
    });
  });

  // Regression for #18: a parent re-render with an equivalent rings array
  // (same length, same values, new reference) must not fire onRingComplete again.
  it('does not re-fire onRingComplete when rings reference changes but values are unchanged', () => {
    const onRingComplete = jest.fn();
    function Harness({ revision }: { revision: number }) {
      // New reference on every render via the inline literal.
      return (
        <RingsProgress
          onRingComplete={onRingComplete}
          rings={[
            { value: 100, color: 'green' },
            { value: 50, color: 'blue' },
          ]}
          data-revision={revision}
        />
      );
    }
    const { rerender } = render(<Harness revision={0} />, { wrapper: TestWrapper });
    onRingComplete.mockClear();

    rerender(<Harness revision={1} />);
    rerender(<Harness revision={2} />);

    expect(onRingComplete).not.toHaveBeenCalled();
  });
});
