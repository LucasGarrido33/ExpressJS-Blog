import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routers/routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/app.css';
import './styles/login.css';
import './styles/dashboard.css';
import './styles/spinner.css';
import './styles/fonts/CaviarDreams.ttf';
import './styles/fonts/CaviarDreams_Bold.ttf';

import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import {loadPosts} from './actions/postActions';
import {loadCategories} from './actions/categoryActions';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();

const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(loadCategories());


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('root')
);
