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
      '--rp-size': 'Controls the size of the outermost ring',
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
