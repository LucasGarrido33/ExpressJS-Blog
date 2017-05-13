import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routers/routes';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';

import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import {loadPosts} from './actions/postActions';
import {loadCategories} from './actions/categoryActions';

const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(loadCategories());


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('root')
);
