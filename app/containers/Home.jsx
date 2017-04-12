import React, { Component } from 'react';
import PostList from '../components/PostList';

  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }

    componentDidMount() {
      fetch('/api',
      { credentials: 'same-origin'})
      .then((response) => response.json())
      .then(posts => this.setState(
        {
          posts: posts
        }));
    }

    render(){
      return (
        <PostList posts={this.state.posts}/>
      );
    }
  }

  export default Home;
