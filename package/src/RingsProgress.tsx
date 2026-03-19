import React, { useEffect, useState } from 'react';
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
  type RingProgressProps,
} from '@mantine/core';
import classes from './RingsProgress.module.css';

export type RingProgressSection = RingProgressProps['sections'][number];

export type RingsProgressStylesNames = 'root' | 'ring' | 'label';

export type RingsProgressCssVariables = {
  root: '--rp-size';
};

export interface RingsProgressProps
  extends BoxProps, StylesApiProps<RingsProgressFactory>, ElementProps<'div'> {
  /** List of rings to display as concentric circles */
  rings: RingProgressSection[];

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

  /** Label displayed in the center of the innermost ring */
  label?: React.ReactNode;

  /** Enable entrance animation (mount from 0 to target), default: false */
  animate?: boolean;

  /** Transition duration in ms (for entrance animation and value changes), default: 1000 */
  transitionDuration?: number;
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
  transitionDuration: 1000,
  rootColorAlpha: 0.15,
};

export const RingsProgress = factory<RingsProgressFactory>((_props, ref) => {
  const theme = useMantineTheme();

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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (animate) {
      requestAnimationFrame(() => {
        setMounted(true);
      });
    }
  }, [animate]);

  return (
    <Box ref={ref} {...getStyles('root', { style: { width: size, height: size } })} {...others}>
      {rings.map((ring, index) => {
        const parsedColor = parseThemeColor({ color: ring.color, theme });
        const effectiveValue = animate && !mounted ? 0 : ring.value;

        return (
          <RingProgress
            key={index}
            rootColor={alpha(parsedColor.value, rootColorAlpha)}
            size={size - index * ((thickness + gap) * 2)}
            thickness={thickness}
            roundCaps={roundCaps}
            transitionDuration={transitionDuration}
            sections={[{ ...ring, value: effectiveValue }]}
            {...getStyles('ring', {
              style: {
                position: 'absolute',
                top: index * (thickness + gap),
                left: index * (thickness + gap),
              },
            })}
          />
        );
      })}
      {label && (
        <Box {...getStyles('label')}>{label}</Box>
      )}
    </Box>
  );
});

RingsProgress.classes = classes;
RingsProgress.displayName = 'RingsProgress';
