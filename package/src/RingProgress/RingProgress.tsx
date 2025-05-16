import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineColor,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { Curve } from './Curve/Curve';
import { getCurves } from './get-curves/get-curves';
import classes from './RingProgress.module.css';

function getClampedThickness(thickness: number, size: number) {
  return Math.min(thickness || 12, (size || 120) / 4);
}

export interface RingProgressSection extends React.ComponentPropsWithRef<'circle'> {
  value: number;
  color: MantineColor;
  tooltip?: React.ReactNode;
}

export type RingProgressStylesNames = 'root' | 'svg' | 'label' | 'curve';
export type RingProgressCssVariables = {
  root: '--rp-size' | '--rp-label-offset';
};

export interface RingProgressProps
  extends BoxProps,
    StylesApiProps<RingProgressFactory>,
    ElementProps<'div'> {
  /** Label displayed in the center of the ring */
  label?: React.ReactNode;

  /** Ring thickness */
  thickness?: number;

  /** Width and height of the progress ring */
  size?: number;

  /** Sets whether the edges of the progress circle are rounded */
  roundCaps?: boolean;

  /** Ring sections */
  sections: RingProgressSection[];

  /** Color of the root section, key of theme.colors or CSS color value */
  rootColor?: MantineColor;

  /** Animate */
  animate?: boolean;

  /** Animation duration in ms */
  animationDuration?: number;

  /** Animation steps */
  animationSteps?: number;

  /** Animation timing function to define the speed curve of the animation */
  animationTimingFunction?:
    | 'linear'
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'ease-in-cubic'
    | 'ease-out-cubic'
    | 'ease-in-out-cubic';
}

export type RingProgressFactory = Factory<{
  props: RingProgressProps;
  ref: HTMLDivElement;
  stylesNames: RingProgressStylesNames;
  vars: RingProgressCssVariables;
}>;

const defaultProps: Partial<RingProgressProps> = {
  size: 120,
  thickness: 12,
  animate: false,
  animationDuration: 1000,
  animationTimingFunction: 'ease',
  animationSteps: 60,
};

const varsResolver = createVarsResolver<RingProgressFactory>((_, { size, thickness }) => ({
  root: {
    '--rp-size': rem(size),
    '--rp-label-offset': rem(thickness! * 2),
  },
}));

export const RingProgress = factory<RingProgressFactory>((_props, ref) => {
  const props = useProps('RingProgress', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    sections: initialSections,
    size,
    thickness,
    roundCaps,
    rootColor,
    animate,
    animationSteps,
    animationDuration,
    animationTimingFunction,
    ...others
  } = props;

  const timingFunctions = {
    linear: (t: number) => t,
    ease: (t: number) =>
      t < 0.5 ? 0.5 * (2 * t) * (2 * t) : -0.5 * ((2 * t - 1) * (2 * t - 3) - 1),
    'ease-in': (t: number) => t * t,
    'ease-out': (t: number) => t * (2 - t),
    'ease-in-out': (t: number) => (t < 0.5 ? 0.5 * t * t : -0.5 * ((2 * t - 1) * (2 * t - 3) - 1)),
    'ease-in-cubic': (t: number) => t * t * t,
    'ease-out-cubic': (t: number) => {
      const t1 = t - 1;
      return t1 * t1 * t1 + 1;
    },
    'ease-in-out-cubic': (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  };

  const [sections, setSections] = React.useState(
    initialSections.map((section) => ({
      ...section,
      ...(animate && { value: 0 }),
    }))
  );

  React.useEffect(() => {
    // animation
    if (animate) {
      animateSection();
    }
  }, [animate, animationDuration, animationSteps, animationTimingFunction, initialSections]);

  function animateSection() {
    const section = initialSections[0];
    const stepValue = section.value / animationSteps;

    let currentStep = 0;

    const timeFunction = timingFunctions[animationTimingFunction];

    const animationInterval = setInterval(() => {
      currentStep++;
      const t = currentStep / animationSteps;
      const easingValue = timeFunction(t);
      const animatedValue = stepValue * easingValue * animationSteps;

      setSections((prevSections) => [
        {
          ...prevSections[0],
          value: animatedValue,
        },
      ]);

      if (currentStep === animationSteps) {
        clearInterval(animationInterval);
      }
    }, animationDuration / animationSteps);
  }

  const getStyles = useStyles<RingProgressFactory>({
    name: 'RingProgress',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const clampedThickness = getClampedThickness(thickness!, size!);

  const curves = getCurves({
    size: size!,
    thickness: clampedThickness,
    sections,
    renderRoundedLineCaps: roundCaps,
    rootColor,
  }).map(({ data, sum, root, lineRoundCaps, offset }, index) => (
    <Curve
      {...data}
      key={index}
      size={size!}
      thickness={clampedThickness}
      sum={sum}
      offset={offset}
      color={data?.color}
      root={root}
      lineRoundCaps={lineRoundCaps}
      getStyles={getStyles}
    />
  ));

  return (
    <Box {...getStyles('root')} size={size} ref={ref} {...others}>
      <svg {...getStyles('svg')}>{curves}</svg>
      {label && <div {...getStyles('label')}>{label}</div>}
    </Box>
  );
});

RingProgress.classes = classes;
RingProgress.displayName = 'RingProgress';
