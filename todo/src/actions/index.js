export const CHANGE_TITLE = 'CHANGE_TITLE';
export const changeTitle = newTitle => {
  return {
    type: CHANGE_TITLE,
    payload: newTitle
  };
};

export const ADD_TASK = 'ADD_TASK';
export const addTask = newTask => {
  return {
    type: ADD_TASK,
    payload: newTask
  }
}

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask = id => {
  return {
    type: TOGGLE_TASK,
    payload: id
  }
}

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTask = completedStatus => {
  return {
    type: DELETE_TASK,
    payload: completedStatus
  }
}

