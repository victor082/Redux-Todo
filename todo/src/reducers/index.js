import { CHANGE_TITLE, ADD_TASK, TOGGLE_TASK } from '../actions';

const initialState = {
  title: 'Click here to name your List!',
  tasks: [
    { task: 'Wash the dishes', completeStatus: true, id: 8695433 },
    { task: 'Vacuum the lawn', completeStatus: false, id: 4934312}
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
        { task: action.payload, completeStatus: false }
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
        return task
      })
    }

    default:
      return state;
  }
};