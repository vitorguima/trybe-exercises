import { INPUT_TASK } from '../actions/index';

const INITIAL_STATE = {
  inputTask: '',
};

function inputTaskReducer(state = INITIAL_STATE, action) {
  const { input } = action;
  switch (action.type) {
    case INPUT_TASK:
      return { inputTask: input };
    default:
      return state;
  }
}

export default inputTaskReducer;