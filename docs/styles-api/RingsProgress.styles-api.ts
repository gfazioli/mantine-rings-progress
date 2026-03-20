import type { RingsProgressFactory } from '@gfazioli/mantine-rings-progress';
import type { StylesApiData } from '../components/styles-api.types';

export const RingsProgressStylesApi: StylesApiData<RingsProgressFactory> = {
  selectors: {
    root: 'Root element',
    ring: 'Ring element',
    label: 'Label element centered in the rings',
  },

  vars: {
    root: {
      '--rp-transition-duration':
        'Set internally on each `RingProgress` child by the `transitionDuration` prop — not directly customizable via CSS',
    },
  },

  modifiers: [
    {
      modifier: 'data-pulsing',
      selector: 'ring',
      condition: '`pulseOnComplete` is true and ring reaches 100%',
    },
  ],
};
