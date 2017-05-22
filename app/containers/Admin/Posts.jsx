import React, { Component } from 'react';
import PostList from '../../components/Admin/PostList';
import {connect} from 'react-redux';
import {deletePost} from '../../actions/postActions';

  class Posts extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      return (
        <PostList posts={this.props.posts} onDeletePost={this.props.onDeleteClick}/>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      posts: state.posts
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onDeleteClick: (post) => {
        dispatch(deletePost(post));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Posts);
