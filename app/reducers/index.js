import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';
import categories from './categories';
import session from './session';

const rootReducer = combineReducers({
  form: formReducer,
  posts,
  categories,
  session
});

export default rootReducer;
