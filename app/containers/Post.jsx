import React, { Component } from 'react';
import PostInfo from '../components/PostInfo';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  componentDidMount() {
    fetch(`/api/post/${this.props.params.postId}`,
      { credentials: 'same-origin'})
    .then((response) => response.json())
    .then(post => this.setState(
      {
        post: post
      }));
  }

  render(){
    if (!this.state.post) {
      return <div>Loading</div>;
    }
    return (
      <PostInfo post={this.state.post}/>
    );
  }


}

export default Post;
