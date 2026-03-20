import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import classes from './RingsProgress.module.css';

export type RingProgressSection = RingProgressProps['sections'][number];

export interface RingsProgressRing {
  /** Ring value (0-100) */
  value: number;

  /** Ring color, key of theme.colors or CSS color value */
  color: MantineColor;

  /** Tooltip content displayed on hover */
  tooltip?: React.ReactNode;

  /** Props for the Tooltip.Floating component wrapping this ring */
  tooltipProps?: Omit<TooltipFloatingProps, 'label' | 'children'>;

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
}

export type RingsProgressStylesNames = 'root' | 'ring' | 'label';

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
  roundCaps: true,
  transitionDuration: 0,
  rootColorAlpha: 0.15,
  staggerDelay: 0,
  glow: false,
  pulseOnComplete: false,
  startAngle: 0,
  direction: 'clockwise',
  withTooltip: false,
};

export const RingsProgress = factory<RingsProgressFactory>((_props, ref) => {
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
      setMountedRings(rings.map(() => true));
      return;
    }

    setMountedRings(rings.map(() => false));
    cleanupTimeouts();

    const delay = staggerDelay || 0;
    rings.forEach((_, index) => {
      const timeout = setTimeout(
        () => {
          setMountedRings((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        },
        delay > 0 ? index * delay : 0
      );
      timeoutsRef.current.push(timeout);
    });

    if (delay === 0) {
      cleanupTimeouts();
      requestAnimationFrame(() => {
        setMountedRings(rings.map(() => true));
      });
    }

    return cleanupTimeouts;
  }, [animate, reduceMotion, rings.length, staggerDelay]);

  // Pulse on completion: track previous values to detect crossing 100%
  const prevValuesRef = useRef<number[]>(rings.map((r) => r.value));
  const [pulsingRings, setPulsingRings] = useState<boolean[]>(rings.map(() => false));
  const ringValuesKey = useMemo(() => rings.map((r) => r.value).join(','), [rings]);

  useEffect(() => {
    const currentValues = rings.map((r) => r.value);
    const crossedComplete = currentValues.map((value, i) => {
      const prev = prevValuesRef.current[i] ?? 0;
      return value >= 100 && prev < 100;
    });

    // Fire onRingComplete callback for each ring that just reached 100%
    if (onRingComplete) {
      crossedComplete.forEach((crossed, i) => {
        if (crossed) {
          onRingComplete(i, rings[i]);
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

  // Effective transition duration
  const allMounted = mountedRings.every(Boolean);
  const effectiveTransitionDuration = reduceMotion
    ? 0
    : animate && !allMounted
      ? transitionDuration || 1000
      : transitionDuration;

  // Compute cumulative offsets for per-ring thickness support
  const offsets: number[] = [];
  let cumulativeOffset = 0;
  for (let i = 0; i < rings.length; i++) {
    offsets.push(cumulativeOffset);
    const ringThickness = rings[i].thickness ?? thickness;
    cumulativeOffset += ringThickness + gap;
  }

  // Glow: resolve default blur
  const glowBlur = glow === true ? 6 : typeof glow === 'number' ? glow : 0;

  // SVG transform for startAngle and direction
  // Mantine's RingProgress CSS applies rotate(-90deg) to start at 12 o'clock.
  // We must include that base rotation when overriding the transform.
  const svgTransform =
    startAngle !== 0 || direction === 'counterclockwise'
      ? `rotate(${-90 + startAngle}deg)${direction === 'counterclockwise' ? ' scaleX(-1)' : ''}`
      : undefined;

  const content = (
    <Box
      ref={ref}
      {...getStyles('root', { style: { width: size, height: size } })}
      role="group"
      aria-label="Progress rings"
      {...others}
    >
      {rings.map((ring, index) => {
        const {
          thickness: ringThicknessOverride,
          roundCaps: ringRoundCapsOverride,
          ariaLabel: ringAriaLabelOverride,
          tooltipProps: ringTooltipProps,
          glowIntensity,
          glowColor,
          rootColor: ringRootColor,
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

        return (
          <RingProgress
            key={index}
            rootColor={
              ringRootColor
                ? parseThemeColor({ color: ringRootColor, theme }).value
                : alpha(parsedColor.value, rootColorAlpha)
            }
            size={size - offsets[index] * 2}
            thickness={ringThickness}
            roundCaps={ringRoundCaps}
            transitionDuration={effectiveTransitionDuration}
            sections={[{ ...sectionWithoutTooltip, value: effectiveValue }]}
            role="progressbar"
            aria-valuenow={Math.round(ring.value)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={ringAriaLabel}
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
