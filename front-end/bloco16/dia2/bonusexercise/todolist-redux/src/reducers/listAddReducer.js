import { NEW_TASK } from '../actions/index';

const INITIAL_STATE = {
  tasks: [],
};

function listAddReducer(state = INITIAL_STATE, action) {
  const { task } = action;
  switch (action.type) {
    case NEW_TASK:
      return { tasks: [...state.tasks, task] };
    default:
      return state;
  }
}

export default listAddReducer;