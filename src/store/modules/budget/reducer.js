import produce from 'immer';

const INITIAL_STATE = {};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@budget/CALCULATE': {
        console.log(action.payload);
        // draft.loading = true;
        break;
      }
      default:
    }
  });
}
