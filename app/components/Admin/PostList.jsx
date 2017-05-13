import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostListItem from './PostListItem';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  handleDeletePost(post) {
    this.props.onDeletePost(post);
  }

  render(){

    const posts = this.props.posts.map((post) => <PostListItem onHandleDeletePost={this.handleDeletePost} post={post} key={post.id}/>);

    return (
      <div>
        <ul>{ posts }</ul>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDeletePost: PropTypes.func.isRequired
};

export default PostList;
