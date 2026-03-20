import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  alpha,
  Box,
  BoxProps,
  ElementProps,
  Factory,
  factory,
  parseThemeColor,
  RingProgress,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
  type MantineColor,
  type RingProgressProps,
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

  /** Override thickness for this specific ring */
  thickness?: number;

  /** Override roundCaps for this specific ring */
  roundCaps?: boolean;

  /** Accessible label for this ring, defaults to "Ring {index}: {value}%" */
  ariaLabel?: string;
}

export type RingsProgressStylesNames = 'root' | 'ring' | 'label';

export type RingsProgressCssVariables = {
  root: '--rp-size';
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

    // Reset all rings to unmounted
    setMountedRings(rings.map(() => false));
    cleanupTimeouts();

    // Stagger each ring's mount
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

    // If no stagger, use rAF for the initial paint-then-animate trick
    if (delay === 0) {
      cleanupTimeouts();
      requestAnimationFrame(() => {
        setMountedRings(rings.map(() => true));
      });
    }

    return cleanupTimeouts;
  }, [animate, reduceMotion, rings.length, staggerDelay]);

  // During entrance animation, use transitionDuration (default 1000ms if animate is on but no explicit duration)
  // After animation completes or when not animating, use transitionDuration as-is (default 0)
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

  return (
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
          ...ringSection
        } = ring;

        const parsedColor = parseThemeColor({ color: ring.color, theme });
        const effectiveValue = animate && !mountedRings[index] ? 0 : ring.value;
        const ringThickness = ringThicknessOverride ?? thickness;
        const ringRoundCaps = ringRoundCapsOverride ?? roundCaps;
        const ringAriaLabel =
          ringAriaLabelOverride ?? `Ring ${index + 1}: ${Math.round(ring.value)}%`;

        return (
          <RingProgress
            key={index}
            rootColor={alpha(parsedColor.value, rootColorAlpha)}
            size={size - offsets[index] * 2}
            thickness={ringThickness}
            roundCaps={ringRoundCaps}
            transitionDuration={effectiveTransitionDuration}
            sections={[{ ...ringSection, value: effectiveValue }]}
            role="progressbar"
            aria-valuenow={Math.round(ring.value)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={ringAriaLabel}
            {...getStyles('ring', {
              style: {
                position: 'absolute',
                top: offsets[index],
                left: offsets[index],
              },
            })}
          />
        );
      })}
      {label && <Box {...getStyles('label')}>{label}</Box>}
    </Box>
  );
});

RingsProgress.classes = classes;
RingsProgress.displayName = 'RingsProgress';
