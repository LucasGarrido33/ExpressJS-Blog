import * as types from '../actions/actionTypes';

// takes the current state and an action and it returns the next state
const posts = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
};


export default posts;
