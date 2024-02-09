import type { RingsProgressFactory } from '@gfazioli/mantine-rings-progress';
import type { StylesApiData } from '../components/styles-api.types';

export const RingsProgressStylesApi: StylesApiData<RingsProgressFactory> = {
  selectors: {
    root: 'Root element',
    ring: 'Rings children',
  },

  vars: {
    root: {
      '--rings-none': 'Controls',
    },
  },

  modifiers: [{ modifier: 'data-centered', selector: 'root', condition: '`centered` prop is set' }],
};
