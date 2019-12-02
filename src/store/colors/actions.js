import { UPDATE_BACKGROUND } from './types';

export const clickColor = background => ({
  type: UPDATE_BACKGROUND,
  payload: {
    background,
  },
});
