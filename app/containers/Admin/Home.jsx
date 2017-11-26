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
        <h1 className="has-text-centered title">Posts</h1>

        <div className="columns">

          <div className="column">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">
                  List
                </p>
              </div>
              <div className="card-content list">
                <PostList posts={posts} onDeletePost={this.props.onDeletePostClick}/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">
                  Create
                </p>
              </div>
              <div className="card-content">
                <PostForm onSubmit={this.props.onCreatePostClick} categories={this.props.categories}/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">
                  Sort
                </p>
              </div>
              <div className="card-content list">
                TODO
                {/* <DraggableList onClick={this.props.onSortPostsClick} elements={posts}/> */}
              </div>
            </div>
          </div>
        </div>

        <h1 className="has-text-centered title">Categories</h1>

        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">
                  List
                </p>
              </div>
              <div className="card-content list">
                <CategoryList categories={categories} onDeleteCategory={this.props.onDeleteCategoryClick}/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">
                  Create
                </p>
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
