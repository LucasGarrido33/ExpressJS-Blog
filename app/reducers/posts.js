import * as types from '../actions/actionTypes';
import {browserHistory } from 'react-router';

// takes the current state and an action and it returns the next state
const posts = (state = [], action) => {
  switch (action.type) {

    case types.LOAD_POSTS_SUCCESS:
      return action.posts;

    case types.CREATE_POST_SUCCESS:
      browserHistory.push('/admin/posts');
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ];

    case types.DELETE_POST_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfPostToDelete = state.findIndex(post => {
        return post.id == action.post.id;
      });
      newState.splice(indexOfPostToDelete, 1);
      return newState;
    }

    case types.UPDATE_POST_SUCCESS:
      browserHistory.push('/admin/posts');
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ];

    default:
      return state;
  }
};


export default posts;
