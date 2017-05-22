import * as types from '../actions/actionTypes';
import {browserHistory } from 'react-router';

// takes the current state and an action and it returns the next state
const categories = (state = [], action) => {
  switch (action.type) {

    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories;

    case types.CREATE_CATEGORY_SUCCESS:
      browserHistory.push('/admin/categories');
      return [
        ...state.filter(category => category.id !== action.category.id),
        Object.assign({}, action.category)
      ];

    case types.UPDATE_CATEGORY_SUCCESS:
      browserHistory.push('/admin/categories');
      return [
        ...state.filter(category => category.id !== action.category.id),
        Object.assign({}, action.category)
      ];

    case types.DELETE_CATEGORY_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfCategoryToDelete = state.findIndex(category => {
        return category.id == action.category.id;
      });
      newState.splice(indexOfCategoryToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
};


export default categories;
