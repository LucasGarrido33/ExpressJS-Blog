import React from 'react';

import App from '../containers/Admin/App';
import Home from '../containers/Admin/Home';
import Posts from '../containers/Admin/Posts';
import PostsForm from '../components/Admin/PostForm';

import Categories from '../containers/Admin/Categories';
import CategoryForm from '../components/Admin/CategoryForm';

import {Route, IndexRoute} from 'react-router';

const routes = (
    <Route path="admin" component={App} >
      <IndexRoute component={Home} />
      <Route path="posts" component={Posts}/>
      <Route path="post/create" component={PostsForm}/>
      <Route path="post/edit/:postId" component={PostsForm}/>
      <Route path="categories" component={Categories}/>
      <Route path="category/create" component={CategoryForm}/>
      <Route path="category/edit/:categoryId" component={CategoryForm}/>

    </Route>
);

export default routes;
