import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import session from './session';

const rootReducer = combineReducers({
  posts,
  categories,
  session
});

export default rootReducer;
