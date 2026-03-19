import type { RingsProgressFactory } from '@gfazioli/mantine-rings-progress';
import type { StylesApiData } from '../components/styles-api.types';

export const RingsProgressStylesApi: StylesApiData<RingsProgressFactory> = {
  selectors: {
    root: 'Root element',
    ring: 'Ring element',
  },

  vars: {
    root: {
      '--rp-size': 'Controls the size of the outermost ring',
    },
  },

  modifiers: [],
};
