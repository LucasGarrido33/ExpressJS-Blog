import React from 'react';

import App from '../containers/Admin/App';
import Home from '../containers/Admin/Home';
import Posts from '../containers/Admin/Posts';
import EditPost from '../containers/Admin/EditPost';
import SortPosts from '../containers/Admin/SortPosts';

import Categories from '../containers/Admin/Categories';
import EditCategory from '../containers/Admin/EditCategory';

import {Route, IndexRoute} from 'react-router';

const routes = (
    <Route path="admin"  onEnter={requireAuth} component={App} >
      <IndexRoute component={Home} />
      <Route path="posts" component={Posts}/>
      <Route path="posts/sort" component={SortPosts}/>
      <Route path="post/edit/:postId" component={EditPost}/>
      <Route path="categories" component={Categories}/>
      <Route path="category/edit/:categoryId" component={EditCategory}/>

    </Route>
);

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default routes;
