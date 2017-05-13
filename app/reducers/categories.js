import * as types from '../actions/actionTypes';

// takes the current state and an action and it returns the next state
const categories = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
};


export default categories;
