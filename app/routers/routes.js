import React from 'react';

import App from '../containers/App';

import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Post from '../containers/Post';
import Login from '../containers/Login';

import adminRoutes from './adminRoutes';

import NotFound from '../containers/NotFound';

import {Route, IndexRoute} from 'react-router';

const routes = (
    <Route path="/">

      <Route component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login}/>
        <Route path="contact" component={Contact}/>
        <Route path="about" component={About}/>
        <Route path="post/:postId" component={Post}/>
      </Route>

      {adminRoutes}

      <Route path="*" component={NotFound}/>
    </Route>
);

export default routes;
