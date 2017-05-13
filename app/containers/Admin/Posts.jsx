import React, { Component } from 'react';
import PostList from '../../components/Admin/PostList';

  class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
      this.deletePost = this.deletePost.bind(this);

    }

    componentDidMount() {
      fetch('/api/admin/',
      {credentials: 'same-origin'})
      .then((response) => response.json())
      .then(posts => this.setState(
        {
          posts: posts
        }));
    }

    deletePost(post) {
      const myHeaders = new Headers({
        'Content-Type': 'application/json'
      });

      fetch('/api/admin/',
      {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify({post_id: post.id})
      })
      .then((response) => response.json());

      const newState = Object.assign([], this.state.posts);

      if (newState.indexOf(post) > -1) {
        newState.splice(newState.indexOf(post), 1);
        this.setState({posts: newState});
      }

    }

    render(){

      return (
        <PostList posts={this.state.posts} onDeletePost={this.deletePost}/>
      );
    }
  }

  export default Posts;
