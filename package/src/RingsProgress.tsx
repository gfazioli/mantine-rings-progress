import {
  alpha,
  Box,
  BoxProps,
  ColorSwatch,
  ElementProps,
  Factory,
  factory,
  Group,
  parseThemeColor,
  RingProgress,
  Stack,
  StylesApiProps,
  Text,
  Tooltip,
  useMantineTheme,
  useProps,
  useStyles,
  type MantineColor,
  type RingProgressProps,
  type TooltipFloatingProps,
} from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './RingsProgress.module.css';

export type RingProgressSection = RingProgressProps['sections'][number];

export interface RingsProgressRing {
  /** Ring value (0-100) */
  value: number;

  /** Ring color, key of theme.colors or CSS color value */
  color: MantineColor;

  /** Tooltip content displayed when withTooltip is enabled */
  tooltip?: React.ReactNode;

  /** Override thickness for this specific ring */
  thickness?: number;

  /** Override roundCaps for this specific ring */
  roundCaps?: boolean;

  /** Glow intensity (blur radius in px) for this ring, overrides global glow */
  glowIntensity?: number;

  /** Glow color for this ring, defaults to ring color */
  glowColor?: MantineColor;

  /** Override rootColor for this specific ring (defaults to alpha of ring color) */
  rootColor?: MantineColor;

  /** Accessible label for this ring, defaults to "Ring {index}: {value}%" */
  ariaLabel?: string;

  /** Show a value label positioned at the endpoint of this ring's arc. Overrides the global `showValues`. */
  showValue?: boolean;

  /** Custom formatter for this ring's value label. Receives the numeric value, returns the displayed string. Falls back to the global `formatValue`. */
  formatValue?: (value: number) => string;

  /** Called when the ring is clicked. The ring becomes keyboard-focusable (Enter/Space activates it) and the cursor switches to pointer. */
  onClick?: (ring: RingsProgressRing, index: number) => void;

  /** Called on pointer enter and leave. Receives `hovered` so consumers can react to both edges of the hover. */
  onHover?: (ring: RingsProgressRing, index: number, hovered: boolean) => void;
}

export type RingsProgressStylesNames = 'root' | 'ring' | 'label' | 'valueLabel';

export type RingsProgressCssVariables = {
  root: '--rp-transition-duration';
};

export interface RingsProgressProps
  extends BoxProps, StylesApiProps<RingsProgressFactory>, ElementProps<'div'> {
  /** List of rings to display as concentric circles */
  rings: RingsProgressRing[];

  /** Gap between rings, default: 8 */
  gap?: number;

  /** Alpha for root color derived from ring color, default: 0.15 */
  rootColorAlpha?: number;

  /** Width and height of the outermost ring, default: 120 */
  size?: number;

  /** Ring thickness, default: 12 */
  thickness?: number;

  /** Rounded line caps, default: true */
  roundCaps?: boolean;

  /** Label displayed in the center of the rings */
  label?: React.ReactNode;

  /** Enable entrance animation (mount from 0 to target), default: false */
  animate?: boolean;

  /**
   * Smoothly animate value changes after the entrance animation has completed.
   * Reuses `transitionDuration` for the duration (or 500 ms when `transitionDuration`
   * is 0). Respects `prefers-reduced-motion`.
   * @default false
   */
  animateValueChanges?: boolean;

  /** Transition duration in ms for entrance animation and value changes, default: 0 */
  transitionDuration?: number;

  /** Delay between each ring's entrance animation in ms, default: 0 (simultaneous) */
  staggerDelay?: number;

  /** Default Tooltip.Floating props applied to all ring tooltips */
  tooltipProps?: Omit<TooltipFloatingProps, 'label' | 'children'>;

  /** Enable glow effect. true = default 6px blur, number = custom blur radius in px. Default: false */
  glow?: boolean | number;

  /** Trigger a pulse animation when a ring reaches 100%, default: false */
  pulseOnComplete?: boolean;

  /** Start angle in degrees (0 = 12 o'clock position), default: 0 */
  startAngle?: number;

  /** Ring fill direction, default: 'clockwise' */
  direction?: 'clockwise' | 'counterclockwise';

  /** Callback fired when a ring value reaches 100% */
  onRingComplete?: (index: number, ring: RingsProgressRing) => void;

  /** Show a unified tooltip with all rings info on hover, default: false */
  withTooltip?: boolean;

  /** Show a value label at the endpoint of every ring's arc. Each ring can override with `showValue`. */
  showValues?: boolean;

  /** Default formatter for value labels. Each ring can override with its own `formatValue`. Defaults to `${Math.round(value)}%`. */
  formatValue?: (value: number) => string;
}

export type RingsProgressFactory = Factory<{
  props: RingsProgressProps;
  ref: HTMLDivElement;
  stylesNames: RingsProgressStylesNames;
  vars: RingsProgressCssVariables;
}>;

const defaultProps: Partial<RingsProgressProps> = {
  size: 120,
  thickness: 12,
  gap: 8,
  animate: false,
  animateValueChanges: false,
  roundCaps: true,
  showValues: false,
  transitionDuration: 0,
  rootColorAlpha: 0.15,
  staggerDelay: 0,
  glow: false,
  pulseOnComplete: false,
  startAngle: 0,
  direction: 'clockwise',
  withTooltip: false,
};

export const RingsProgress = factory<RingsProgressFactory>((_props) => {
  const theme = useMantineTheme();
  const reduceMotion = useReducedMotion();

  const props = useProps('RingsProgress', defaultProps, _props);

  const {
    rings,
    size,
    thickness,
    gap,
    rootColorAlpha,
    label,
    animate,
    animateValueChanges,
    transitionDuration,
    roundCaps,
    staggerDelay,
    tooltipProps: globalTooltipProps,
    glow,
    pulseOnComplete,
    startAngle,
    direction,
    onRingComplete,
    withTooltip,
    showValues,
    formatValue,
    classNames,
    styles,
    unstyled,
    vars,
    ...others
  } = props;

  const getStyles = useStyles<RingsProgressFactory>({
    name: 'RingsProgress',
    props,
    classes,
    classNames,
    styles,
    unstyled,
    vars,
  });

  // Mirror the rings array into a ref so effects can access the latest items without
  // listing the unstable `rings` reference in their dependency arrays. The ref is
  // refreshed on every render, which is cheap and side-effect-free.
  const ringsRef = useRef(rings);
  ringsRef.current = rings;
  const ringCount = rings.length;

  // Staggered entrance animation state
  const [mountedRings, setMountedRings] = useState<boolean[]>(() =>
    rings.map(() => !animate || reduceMotion)
  );
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const cleanupTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  useEffect(() => {
    if (!animate || reduceMotion) {
      setMountedRings(Array.from({ length: ringCount }, () => true));
      return;
    }

    // Reset all rings to unmounted
    setMountedRings(Array.from({ length: ringCount }, () => false));
    cleanupTimeouts();

    if (staggerDelay && staggerDelay > 0) {
      // Staggered: each ring mounts after incremental delay
      for (let index = 0; index < ringCount; index++) {
        const timeout = setTimeout(() => {
          setMountedRings((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }, index * staggerDelay);
        timeoutsRef.current.push(timeout);
      }
    } else {
      // Simultaneous: paint with value=0, then mount all in next frame
      requestAnimationFrame(() => {
        setMountedRings(Array.from({ length: ringCount }, () => true));
      });
    }

    return cleanupTimeouts;
  }, [animate, reduceMotion, ringCount, staggerDelay, cleanupTimeouts]);

  // Pulse on completion: track previous values to detect crossing 100%
  const prevValuesRef = useRef<number[]>(rings.map((r) => r.value));
  const [pulsingRings, setPulsingRings] = useState<boolean[]>(rings.map(() => false));
  const ringValuesKey = rings.map((r) => r.value).join(',');

  // Reset pulse tracking when ring count changes (reads ringsRef so values stay current
  // without re-running on every render).
  useEffect(() => {
    const current = ringsRef.current;
    prevValuesRef.current = current.map((r) => r.value);
    setPulsingRings(current.map(() => false));
  }, [ringCount]);

  useEffect(() => {
    const current = ringsRef.current;
    const currentValues = current.map((r) => r.value);
    const crossedComplete = currentValues.map((value, i) => {
      const prev = prevValuesRef.current[i] ?? 0;
      return value >= 100 && prev < 100;
    });

    // Fire onRingComplete callback for each ring that just reached 100%
    if (onRingComplete) {
      crossedComplete.forEach((crossed, i) => {
        if (crossed) {
          onRingComplete(i, current[i]);
        }
      });
    }

    // Trigger pulse animation
    if (pulseOnComplete && !reduceMotion && crossedComplete.some(Boolean)) {
      setPulsingRings(crossedComplete);
    }

    prevValuesRef.current = currentValues;
  }, [ringValuesKey, pulseOnComplete, reduceMotion, onRingComplete]);

  const handleAnimationEnd = useCallback((index: number) => {
    setPulsingRings((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });
  }, []);

  // Effective transition duration. Mantine's RingProgress already animates
  // stroke-dashoffset/dasharray/stroke whenever its `--rp-transition-duration`
  // is non-zero, so to animate value changes after mount we just keep a non-zero
  // duration when `animateValueChanges` is on. `prefers-reduced-motion` always wins.
  const allMounted = mountedRings.every(Boolean);
  const effectiveTransitionDuration = reduceMotion
    ? 0
    : animate && !allMounted
      ? transitionDuration || 1000
      : animateValueChanges
        ? transitionDuration || 500
        : transitionDuration;

  // Compute cumulative offsets for per-ring thickness support
  const offsets: number[] = [];
  let cumulativeOffset = 0;
  for (let i = 0; i < rings.length; i++) {
    offsets.push(cumulativeOffset);
    const ringThickness = rings[i].thickness ?? thickness;
    cumulativeOffset += (ringThickness ?? 0) + (gap ?? 0);
  }

  // Per-ring hit testing for click and hover (#19): each ring's wrapper rectangle
  // overlaps the inner rings, so DOM hit-testing always lands on the topmost ring.
  // Instead, we attach a single set of handlers to the outer container and resolve
  // the actual ring from the cursor's radial distance to the centre.
  const hasInteractive = rings.some((r) => r.onClick || r.onHover);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);
  hoveredIndexRef.current = hoveredIndex;

  const ringAtPoint = useCallback(
    (clientX: number, clientY: number, rect: DOMRect): number | null => {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const r = Math.hypot(clientX - cx, clientY - cy);
      const current = ringsRef.current;
      for (let i = 0; i < current.length; i++) {
        const t = current[i].thickness ?? thickness ?? 12;
        const ringSize = (size ?? 120) - offsets[i] * 2;
        // Mantine RingProgress draws each circle at r = (size * 0.9 - thickness * 2) / 2
        // (5% padding per side plus a thickness-wide inset). Match that exactly so the
        // hit-test bands line up with the visible strokes.
        const centerR = (ringSize * 0.9 - t * 2) / 2;
        if (Math.abs(r - centerR) <= t / 2) {
          return i;
        }
      }
      return null;
    },
    // offsets is recomputed every render; capture by closure rather than listing it
    // (size/thickness are stable refs through props).
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, thickness, ringCount]
  );

  const handleContainerClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!hasInteractive) {
        return;
      }
      const rect = event.currentTarget.getBoundingClientRect();
      const idx = ringAtPoint(event.clientX, event.clientY, rect);
      if (idx === null) {
        return;
      }
      const ring = ringsRef.current[idx];
      ring.onClick?.(ring, idx);
    },
    [hasInteractive, ringAtPoint]
  );

  const handleContainerMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!hasInteractive) {
        return;
      }
      const rect = event.currentTarget.getBoundingClientRect();
      const idx = ringAtPoint(event.clientX, event.clientY, rect);
      if (idx === hoveredIndexRef.current) {
        return;
      }
      const prev = hoveredIndexRef.current;
      if (prev !== null) {
        const prevRing = ringsRef.current[prev];
        prevRing.onHover?.(prevRing, prev, false);
      }
      setHoveredIndex(idx);
      if (idx !== null) {
        const newRing = ringsRef.current[idx];
        newRing.onHover?.(newRing, idx, true);
      }
    },
    [hasInteractive, ringAtPoint]
  );

  const handleContainerMouseLeave = useCallback(() => {
    if (hoveredIndexRef.current === null) {
      return;
    }
    const prev = hoveredIndexRef.current;
    const prevRing = ringsRef.current[prev];
    prevRing.onHover?.(prevRing, prev, false);
    setHoveredIndex(null);
  }, []);

  // Cursor follows the hovered ring: pointer when its consumer wants clicks.
  const containerCursor =
    hoveredIndex !== null && rings[hoveredIndex]?.onClick ? 'pointer' : undefined;

  // Glow: resolve default blur
  const glowBlur = glow === true ? 6 : typeof glow === 'number' ? glow : 0;

  // SVG transform for startAngle and direction
  // Mantine's RingProgress CSS applies rotate(-90deg) to start at 12 o'clock.
  // We must include that base rotation when overriding the transform.
  const svgTransform =
    startAngle !== 0 || direction === 'counterclockwise'
      ? `rotate(${-90 + (startAngle ?? 0)}deg)${direction === 'counterclockwise' ? ' scaleX(-1)' : ''}`
      : undefined;

  const content = (
    <Box
      {...getStyles('root', {
        style: { width: size, height: size, cursor: containerCursor },
      })}
      {...others}
      role={others.role ?? 'group'}
      aria-label={
        others['aria-label'] ?? (others['aria-labelledby'] ? undefined : 'Progress rings')
      }
      onClick={hasInteractive ? handleContainerClick : others.onClick}
      onMouseMove={hasInteractive ? handleContainerMouseMove : others.onMouseMove}
      onMouseLeave={hasInteractive ? handleContainerMouseLeave : others.onMouseLeave}
      data-interactive={hasInteractive || undefined}
      data-hovered-ring={hoveredIndex ?? undefined}
    >
      {rings.map((ring, index) => {
        const {
          thickness: ringThicknessOverride,
          roundCaps: ringRoundCapsOverride,
          ariaLabel: ringAriaLabelOverride,
          glowIntensity,
          glowColor,
          rootColor: ringRootColor,
          onClick: ringOnClick,
          onHover: _ringOnHover,
          ...ringSection
        } = ring;

        const parsedColor = parseThemeColor({ color: ring.color, theme });
        const effectiveValue = animate && !mountedRings[index] ? 0 : ring.value;
        const ringThickness = ringThicknessOverride ?? thickness;
        const ringRoundCaps = ringRoundCapsOverride ?? roundCaps;
        const ringAriaLabel =
          ringAriaLabelOverride ?? `Ring ${index + 1}: ${Math.round(ring.value)}%`;

        // Glow: per-ring override or global
        const ringGlowBlur = glowIntensity ?? glowBlur;
        const ringGlowColor = glowColor
          ? parseThemeColor({ color: glowColor, theme }).value
          : parsedColor.value;

        const glowFilter =
          ringGlowBlur > 0 ? `drop-shadow(0 0 ${ringGlowBlur}px ${ringGlowColor})` : undefined;

        // Strip tooltip from section passed to RingProgress
        const { tooltip: _tooltip, ...sectionWithoutTooltip } = ringSection;

        const isPulsing = pulseOnComplete && pulsingRings[index];

        // Keyboard accessibility for rings with onClick: still expose role=button,
        // tabIndex=0, and Enter/Space activation. The mouse path is handled by the
        // container above via geometric hit-testing, but Tab navigation lands on
        // each individual ring rectangle and Enter/Space then triggers onClick.
        const interactive = Boolean(ringOnClick);
        const handleKeyDown = ringOnClick
          ? (event: React.KeyboardEvent<HTMLDivElement>) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                ringOnClick(ring, index);
              }
            }
          : undefined;

        return (
          <RingProgress
            key={index}
            rootColor={
              ringRootColor
                ? parseThemeColor({ color: ringRootColor, theme }).value
                : alpha(parsedColor.value, rootColorAlpha ?? 0.1)
            }
            size={(size ?? 0) - offsets[index] * 2}
            thickness={ringThickness}
            roundCaps={ringRoundCaps}
            transitionDuration={effectiveTransitionDuration}
            sections={[{ ...sectionWithoutTooltip, value: effectiveValue }]}
            role={interactive ? 'button' : 'progressbar'}
            aria-valuenow={Math.round(ring.value)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={ringAriaLabel}
            tabIndex={interactive ? 0 : undefined}
            onKeyDown={handleKeyDown}
            styles={
              glowFilter || svgTransform
                ? {
                    svg: {
                      ...(glowFilter ? { filter: glowFilter } : {}),
                      ...(svgTransform ? { transform: svgTransform } : {}),
                    },
                  }
                : undefined
            }
            {...getStyles('ring', {
              style: {
                position: 'absolute',
                top: offsets[index],
                left: offsets[index],
              },
            })}
            data-pulsing={isPulsing || undefined}
            onAnimationEnd={isPulsing ? () => handleAnimationEnd(index) : undefined}
          />
        );
      })}
      {(showValues || rings.some((r) => r.showValue)) &&
        rings.map((ring, index) => {
          const shouldShow = ring.showValue ?? showValues;
          if (!shouldShow) {
            return null;
          }
          // Endpoint of this ring's arc, on its stroke centerline.
          const ringT = ring.thickness ?? thickness ?? 12;
          const ringSize = (size ?? 120) - offsets[index] * 2;
          const ringR = (ringSize * 0.9 - ringT * 2) / 2;
          const clampedValue = Math.max(0, Math.min(100, ring.value));
          const directionMultiplier = direction === 'counterclockwise' ? -1 : 1;
          const endAngleDeg = (startAngle ?? 0) + (clampedValue / 100) * 360 * directionMultiplier;
          // 0° points at 12 o'clock; positive angles rotate clockwise.
          const angleRad = (endAngleDeg * Math.PI) / 180;
          const center = (size ?? 120) / 2;
          const x = center + ringR * Math.sin(angleRad);
          const y = center - ringR * Math.cos(angleRad);
          const formatter = ring.formatValue ?? formatValue ?? ((v: number) => `${Math.round(v)}%`);
          return (
            <Box
              key={`value-${index}`}
              {...getStyles('valueLabel', {
                style: {
                  position: 'absolute',
                  left: x,
                  top: y,
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                },
              })}
              data-ring-index={index}
            >
              {formatter(ring.value)}
            </Box>
          );
        })}
      {label && <Box {...getStyles('label')}>{label}</Box>}
    </Box>
  );

  if (withTooltip) {
    const tooltipLabel = (
      <Stack gap={4}>
        {rings.map((ring, index) => {
          const parsedColor = parseThemeColor({ color: ring.color, theme });
          const tooltipContent = ring.tooltip ?? `${Math.round(ring.value)}%`;
          return (
            <Group key={index} gap="xs" wrap="nowrap">
              <ColorSwatch color={parsedColor.value} size={12} withShadow={false} />
              {typeof tooltipContent === 'string' ? (
                <Text size="xs">{tooltipContent}</Text>
              ) : (
                tooltipContent
              )}
            </Group>
          );
        })}
      </Stack>
    );

    return (
      <Tooltip.Floating label={tooltipLabel} {...globalTooltipProps}>
        {content}
      </Tooltip.Floating>
    );
  }

  return content;
});

RingsProgress.classes = classes;
RingsProgress.displayName = 'RingsProgress';
