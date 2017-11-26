import React, { Component } from 'react';
import PostList from '../components/PostList';
import {connect} from 'react-redux';

  class Home extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      if (!this.props.posts.length){
        return <div className="has-text-centered"><h1>No posts yet</h1></div>;
      }
      return (
        <PostList posts={this.props.posts}/>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      posts: state.posts,
      categories: state.categories
    };
  };

  export default connect(mapStateToProps)(Home);
