import { CHANGE_TITLE, ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions';

const initialState = {
  title: 'Click here to name your List!',
  tasks: [
    { task: 'Open the fridge', completeStatus: true, id: 8695433 },
    { task: 'Eat the food', completeStatus: false, id: 4934312}
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case ADD_TASK:
    return {
      ...state,
      tasks: [
        ...state.tasks,
        { task: action.payload, completeStatus: false, id: Date.now()}
      ]
    }
    case TOGGLE_TASK:
    return {
      ...state,
      tasks: state.tasks.map(task => {
        if(task.id === action.payload) {
          return {
            ...task,
            completeStatus: !task.completeStatus
          };
        }
        return task;
      })
    }
    case DELETE_TASK:
    return {
      ...state,
      tasks: state.tasks.filter(task => !task.completeStatus)
    }

    default:
      return state;
  }
};
