import * as Actions from './action-type.js';

const InitializeState = {
  message: 'app store',
};

export default function reducer(state = InitializeState, action) {
  switch (action.type) {
    case Actions.INCREASE_COUNTER:
      if (action.payload) {
        return {
          ...state,
          counter: state.counter + action.payload,
        };
      } else {
        return {
          ...state,
          counter: state.counter === undefined ? 1 : state.counter + 1,
        };
      }

    case Actions.DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter === undefined ? 0 : state.counter - 1,
      };
    case Actions.SET_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return { ...state };
  }
}
