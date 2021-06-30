export const NEW_TASK = 'NEW_TASK';
export const INPUT_TASK = 'INPUT_TASK';

export const newTask = (task) => ({ type: NEW_TASK, task });
export const inputTask = (input) => ({ type: INPUT_TASK, input });
