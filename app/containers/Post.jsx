import React, { Component } from 'react';
import PostInfo from '../components/PostInfo';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  render(){
    if (!this.props.post) {
      return <div>Loading</div>;
    }
    return (
      <PostInfo post={this.props.post}/>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let post = {name: '', images: []};
  const postId = ownProps.params.postId;
  if (state.posts.length > 0) {
    post = Object.assign({}, state.posts.find(post => post.id == postId));
  }
  return {post: post};
};

export default connect(mapStateToProps)(Post);
