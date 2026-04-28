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

    // For SIZE=200, thickness=12, gap=4:
    // Ring 0 (outer): centerR = (200 * 0.9 - 24) / 2 = 78 → band [72, 84]
    // Ring 1 (inner): ringSize = 200 - 32 = 168 → centerR = (168 * 0.9 - 24) / 2 = 63.6 → band [57.6, 69.6]
    // Centre is at (100, 100).

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
      // Click on the outer ring stroke at r ≈ 78 from centre (100, 100).
      fireEvent.click(root, { clientX: 178, clientY: 100 });
      expect(onClick).toHaveBeenCalledWith(rings[0], 0);
    });

    it('does not fire onClick when the cursor is outside any band', () => {
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
      // Dead centre — r=0, outside any band.
      fireEvent.click(root, { clientX: 100, clientY: 100 });
      expect(onClick).not.toHaveBeenCalled();
      // Far edge of the rect — r ≈ 100, outside the outer band [72, 84].
      fireEvent.click(root, { clientX: 200, clientY: 100 });
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

      // Enter the outer ring stroke at r ≈ 78.
      fireEvent.mouseMove(root, { clientX: 178, clientY: 100 });
      // Move to the inner ring stroke at r ≈ 63.6.
      fireEvent.mouseMove(root, { clientX: 163, clientY: 100 });
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

  // Value labels per ring (#14)
  describe('value labels (#14)', () => {
    it('does not render value labels by default', () => {
      const { container } = render(<RingsProgress rings={[{ value: 50, color: 'green' }]} />, {
        wrapper: TestWrapper,
      });
      expect(container.querySelectorAll('[data-ring-index]')).toHaveLength(0);
    });

    it('renders one value label per ring when showValues is true', () => {
      const { container } = render(
        <RingsProgress
          showValues
          rings={[
            { value: 25, color: 'green' },
            { value: 75, color: 'blue' },
          ]}
        />,
        { wrapper: TestWrapper }
      );
      const labels = container.querySelectorAll('[data-ring-index]');
      expect(labels).toHaveLength(2);
      expect(labels[0].getAttribute('data-ring-index')).toBe('0');
      expect(labels[1].getAttribute('data-ring-index')).toBe('1');
    });

    it('formats values with the global formatValue prop', () => {
      const { container } = render(
        <RingsProgress
          showValues
          formatValue={(v) => `${v}/100`}
          rings={[{ value: 42, color: 'green' }]}
        />,
        { wrapper: TestWrapper }
      );
      const label = container.querySelector('[data-ring-index]');
      expect(label?.textContent).toBe('42/100');
    });

    it('per-ring formatValue overrides the global one', () => {
      const { container } = render(
        <RingsProgress
          showValues
          formatValue={(v) => `${v}/100`}
          rings={[
            { value: 50, color: 'green' },
            { value: 80, color: 'blue', formatValue: (v) => `${v}!` },
          ]}
        />,
        { wrapper: TestWrapper }
      );
      const labels = container.querySelectorAll('[data-ring-index]');
      expect(labels[0].textContent).toBe('50/100');
      expect(labels[1].textContent).toBe('80!');
    });

    it('per-ring showValue can selectively enable / disable labels', () => {
      const { container } = render(
        <RingsProgress
          rings={[
            { value: 50, color: 'green', showValue: true },
            { value: 80, color: 'blue' },
          ]}
        />,
        { wrapper: TestWrapper }
      );
      const labels = container.querySelectorAll('[data-ring-index]');
      expect(labels).toHaveLength(1);
      expect(labels[0].getAttribute('data-ring-index')).toBe('0');
    });

    function getXY(label: HTMLElement) {
      return {
        x: Math.round(parseFloat(label.style.left)),
        y: Math.round(parseFloat(label.style.top)),
      };
    }

    it("positions a 50% label at the bottom (12 o'clock + 180° clockwise)", () => {
      const { container } = render(
        <RingsProgress
          size={200}
          thickness={12}
          showValues
          rings={[{ value: 50, color: 'green' }]}
        />,
        { wrapper: TestWrapper }
      );
      const label = container.querySelector('[data-ring-index]') as HTMLElement;
      // Ring 0: ringR = (200 * 0.9 - 24) / 2 = 78. Centre = 100.
      // 50% clockwise from top → 6 o'clock → x=100, y=100+78=178.
      expect(getXY(label)).toEqual({ x: 100, y: 178 });
    });

    it("positions a 25% label at 3 o'clock (90° clockwise from top)", () => {
      const { container } = render(
        <RingsProgress
          size={200}
          thickness={12}
          showValues
          rings={[{ value: 25, color: 'green' }]}
        />,
        { wrapper: TestWrapper }
      );
      const label = container.querySelector('[data-ring-index]') as HTMLElement;
      // 25% → 90° → 3 o'clock → x=100+78=178, y=100.
      expect(getXY(label)).toEqual({ x: 178, y: 100 });
    });

    it('flips the angle when direction is counterclockwise', () => {
      const { container } = render(
        <RingsProgress
          size={200}
          thickness={12}
          direction="counterclockwise"
          showValues
          rings={[{ value: 25, color: 'green' }]}
        />,
        { wrapper: TestWrapper }
      );
      const label = container.querySelector('[data-ring-index]') as HTMLElement;
      // 25% counterclockwise → -90° → 9 o'clock → x=100-78=22, y=100.
      expect(getXY(label)).toEqual({ x: 22, y: 100 });
    });
  });

  // Per-ring linear gradients (#13)
  describe('gradient rings (#13)', () => {
    it('does not inject any <linearGradient> when no ring has a gradient', () => {
      const { container } = render(
        <RingsProgress
          rings={[
            { value: 50, color: 'green' },
            { value: 80, color: 'blue' },
          ]}
        />,
        { wrapper: TestWrapper }
      );
      expect(container.querySelectorAll('linearGradient')).toHaveLength(0);
    });

    it('creates a <linearGradient> with two stops for a ring with a gradient', () => {
      const { container } = render(
        <RingsProgress
          rings={[{ value: 75, color: 'red', gradient: { from: 'red', to: 'orange', deg: 90 } }]}
        />,
        { wrapper: TestWrapper }
      );
      const grads = container.querySelectorAll('linearGradient');
      expect(grads).toHaveLength(1);
      const stops = grads[0].querySelectorAll('stop');
      expect(stops).toHaveLength(2);
      expect(stops[0].getAttribute('offset')).toBe('0%');
      expect(stops[1].getAttribute('offset')).toBe('100%');
    });

    it('passes the gradient url through Mantine via the --curve-color CSS variable', () => {
      const { container } = render(
        <RingsProgress
          rings={[{ value: 75, color: 'red', gradient: { from: 'red', to: 'orange' } }]}
        />,
        { wrapper: TestWrapper }
      );
      const grad = container.querySelector('linearGradient') as SVGLinearGradientElement;
      const id = grad.getAttribute('id');
      expect(id).toMatch(/^rp-grad-/);
      // Mantine paints the stroke from `--curve-color`, set on the foreground circle's
      // inline style.
      const circles = Array.from(container.querySelectorAll<SVGCircleElement>('circle'));
      const fg = circles.find((c) => c.style.getPropertyValue('--curve-color').includes('url('));
      expect(fg?.style.getPropertyValue('--curve-color')).toBe(`url(#${id})`);
    });

    it('only injects gradients for rings that opt in', () => {
      const { container } = render(
        <RingsProgress
          rings={[
            { value: 50, color: 'green' }, // no gradient
            { value: 80, color: 'blue', gradient: { from: 'blue', to: 'cyan' } },
            { value: 30, color: 'red' }, // no gradient
          ]}
        />,
        { wrapper: TestWrapper }
      );
      expect(container.querySelectorAll('linearGradient')).toHaveLength(1);
    });

    it('uses unique gradient ids per ring index', () => {
      const { container } = render(
        <RingsProgress
          rings={[
            { value: 50, color: 'red', gradient: { from: 'red', to: 'pink' } },
            { value: 80, color: 'blue', gradient: { from: 'blue', to: 'cyan' } },
          ]}
        />,
        { wrapper: TestWrapper }
      );
      const ids = Array.from(container.querySelectorAll('linearGradient')).map((g) =>
        g.getAttribute('id')
      );
      expect(ids).toHaveLength(2);
      expect(new Set(ids).size).toBe(2);
    });
  });

  // Animated value transitions (#20)
  describe('animateValueChanges (#20)', () => {
    function getRpDuration(container: HTMLElement) {
      const root = container.querySelector('[role="group"]') as HTMLElement;
      const inner = root.querySelector('[style*="--rp-transition-duration"]') as HTMLElement | null;
      return inner?.style.getPropertyValue('--rp-transition-duration');
    }

    it('does not apply a Mantine transition duration by default (CSS variable defaults to 0)', () => {
      const { container } = render(<RingsProgress rings={[{ value: 50, color: 'green' }]} />, {
        wrapper: TestWrapper,
      });
      // With transitionDuration=0 and animateValueChanges=false, Mantine RingProgress
      // omits the inline --rp-transition-duration entirely, falling back to the CSS
      // default of 0ms — value changes are instant.
      expect(getRpDuration(container) || '0ms').toBe('0ms');
    });

    it('uses the provided transitionDuration when animateValueChanges is enabled', () => {
      const { container } = render(
        <RingsProgress
          animateValueChanges
          transitionDuration={750}
          rings={[{ value: 50, color: 'green' }]}
        />,
        { wrapper: TestWrapper }
      );
      expect(getRpDuration(container)).toBe('750ms');
    });

    it('falls back to a 500 ms default when animateValueChanges is true but transitionDuration is 0', () => {
      const { container } = render(
        <RingsProgress animateValueChanges rings={[{ value: 50, color: 'green' }]} />,
        { wrapper: TestWrapper }
      );
      expect(getRpDuration(container)).toBe('500ms');
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
