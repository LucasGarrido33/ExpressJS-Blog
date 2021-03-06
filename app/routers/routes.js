import React from 'react';

import App from '../containers/App';

import Home from '../containers/Home';
import Contact from '../containers/Contact';
// import Post from '../containers/Post';
import Login from '../containers/Login';
import adminRoutes from './adminRoutes';

import NotFound from '../containers/NotFound';

import {Route, IndexRoute} from 'react-router';

const routes = (
    <Route path="/">

      <Route component={App}>
        <IndexRoute component={Home} />
        <Route path="contact" component={Contact}/>
        {/* <Route path="post/:postId" component={Post}/> */}
      </Route>
      <Route path="login" component={Login}/>
  )
)}/>

      {adminRoutes}

      <Route path="*" component={NotFound}/>
    </Route>
);

export default routes;
