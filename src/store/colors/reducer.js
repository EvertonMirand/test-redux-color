import produce from 'immer';
import { UPDATE_BACKGROUND } from './types';

const INITIAL_STATE = {
  background: '#000',
};

export default function colors(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case UPDATE_BACKGROUND:
        draft.background = action.payload.background;
        break;
      default:
    }
  });
}
