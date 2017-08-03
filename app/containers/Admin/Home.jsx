import React, { Component } from 'react';
import PostList from '../../components/Admin/PostList';
import CategoryList from '../../components/Admin/CategoryList';
import DraggableList from '../../components/Admin/DraggableList';
import PostForm from '../../components/Admin/PostForm';
import CategoryForm from '../../components/Admin/CategoryForm';
import {deleteCategory, createCategory} from '../../actions/categoryActions';
import {deletePost, createPost, sortPosts, loadPosts} from '../../actions/postActions';
import {dismissAlert, addAlert} from '../../actions/alertActions';
import { AlertList } from 'react-bs-notifier';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {

  componentDidMount() {
    this.props.loadPosts();
  }

  render(){
    const {posts, categories} = this.props;
    return (
      <div>
        <AlertList
					alerts={this.props.alerts}
					timeout={5000}
          onDismiss={this.props.dismissAlert}
				/>
        <div className="row">

          <h1 className="text-center">Posts</h1>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h2>List</h2>
              </div>
              <div className="card-content">
                <PostList posts={posts} onDeletePost={this.props.onDeletePostClick}/>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <h2>Create</h2>
              </div>
              <div className="card-content">
                <PostForm onSubmit={this.props.onCreatePostClick} categories={this.props.categories}/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h2>Sort</h2>
              </div>
              <div className="card-content">
                <DraggableList onClick={this.props.onSortPostsClick} elements={posts}/>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <h1 className="text-center">Categories</h1>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h2>List</h2>
              </div>
              <div className="card-content">
                <CategoryList categories={categories} onDeleteCategory={this.props.onDeleteCategoryClick}/>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h2>Create</h2>
              </div>
              <div className="card-content">
                <CategoryForm onSubmit={this.props.onCreateCategoryClick} />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    categories: state.categories,
    alerts: state.alerts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePostClick: (post) => {
      return dispatch(deletePost(post));
    },
    onDeleteCategoryClick: (category) => {
      return dispatch(deleteCategory(category));
    },
    onCreatePostClick: (post) => {
      return dispatch(createPost(post));
    },
    onCreateCategoryClick: (category) => {
      return dispatch(createCategory(category));
    },
    onSortPostsClick: (posts) => {
      // dispatch(addAlert('Sorted Posts'));
      return dispatch(sortPosts(posts)).then(() => dispatch(addAlert('Sorted Posts')) );
    },
    loadPosts: () => {
      return dispatch(loadPosts());
    },
    addAlert: (alert) => {
      return dispatch(addAlert(alert));
    },
    dismissAlert: (alert) => {
      return dispatch(dismissAlert(alert));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
