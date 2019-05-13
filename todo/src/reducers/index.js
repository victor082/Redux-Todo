import { CHANGE_TITLE } from '../actions';

const initialState = {
  title: 'This is a Redux Todo'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      console.log(action);
      return {
        ...state,
        title: action.payload
      };

    default:
      return state;
  }
};