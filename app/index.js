import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

import Error from './components/Error';

import './styles/bootstrap.css';
import './styles/app.css';

import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/post/:postId" component={Post}/>
      <Route path="*" component={Error}/>
    </Route>

  </Router>,
  document.getElementById('root')
);
