import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PostForm from '../../components/Admin/PostForm';
import {browserHistory } from 'react-router';
import {updatePost} from '../../actions/postActions';

class EditPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PostForm edit={true} initialValues={this.props.post} categories={this.props.categories} onSubmit={this.props.onEditClick}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let post = {};
  const postId = ownProps.params.postId;
  if (state.posts.length > 0) {
    const tmpPost = state.posts.find(post => post.id == postId);
    post = Object.assign({}, tmpPost, {category: tmpPost.category.id});
  }
  return {post: post, categories: state.categories};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (post) => {
      dispatch(updatePost(post));
      browserHistory.push('/admin/');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
