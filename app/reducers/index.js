import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as types from '../actions/actionTypes';
import posts from './posts';
import categories from './categories';
import session from './session';
import alerts from './alerts';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    category:(state, action) => {
      switch (action.type) {
        case types.CREATE_CATEGORY_SUCCESS:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    },
    post:(state, action) => {
      switch (action.type) {
        case types.CREATE_POST_SUCCESS:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  }),
  posts,
  categories,
  session,
  alerts
});

export default rootReducer;
