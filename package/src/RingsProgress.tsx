import {
  Box,
  Factory,
  StylesApiProps,
  alpha,
  factory,
  parseThemeColor,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import React from 'react';
import {
  RingProgress,
  RingProgressFactory,
  RingProgressProps,
  RingProgressSection,
} from './RingProgress';
import classes from './RingsProgress.module.css';

export type RingsProgressStylesNames = 'root' | 'ring';

export type RingsProgressCssVariables = {
  root: '--rings-none';
};

export interface RingsProgressProps
  extends Omit<RingProgressProps, 'sections' | 'rootColor'>,
    StylesApiProps<RingProgressFactory> {
  /** List of the rings */
  rings: RingProgressSection[];

  /** Gap between rings */
  gap?: number;

  /** Root color alpha */
  rootColorAlpha?: number;
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
  animationDuration: 1000,
  animationSteps: 60,
  animationTimingFunction: 'ease',
  rootColorAlpha: 0.15,
};

export const RingsProgress = factory<RingsProgressFactory>((_props, ref) => {
  const theme = useMantineTheme();

  const props = useProps('Rings', defaultProps, _props);

  const {
    rings,
    size,
    thickness,
    gap,
    rootColorAlpha,
    label,
    animate,
    animationSteps,
    animationDuration,
    animationTimingFunction,
    roundCaps,
    ...others
  } = props;

  const getStyles = useStyles<RingsProgressFactory>({
    name: 'RingsProgress',
    props,
    classes,
  });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      {rings.map((ring, index) => {
        const parsedColor = parseThemeColor({ color: ring.color, theme });

        return (
          <RingProgress
            label={index === rings.length - 1 ? label : null}
            key={ring.value + ring.color + index}
            rootColor={alpha(parsedColor.value, rootColorAlpha)}
            size={size - index * ((thickness + gap) * 2)}
            thickness={thickness}
            roundCaps={roundCaps}
            animate={animate}
            animationDuration={animationDuration}
            animationSteps={animationSteps}
            animationTimingFunction={animationTimingFunction}
            left={index * (thickness + gap)}
            top={index * (thickness + gap)}
            {...getStyles('ring')}
            styles={{
              label: {
                position: 'absolute',
                top: '50%',
                left: '50% ',
                transform: 'translate(-50%,-50%)',
                right: 'auto',
                color: 'red',
              },
            }}
            sections={[ring]}
          />
        );
      })}
    </Box>
  );
});

RingsProgress.classes = classes;
RingsProgress.displayName = 'RingsProgress';
