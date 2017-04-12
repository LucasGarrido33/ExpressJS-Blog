import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routers/routes';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';

import {Router, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
