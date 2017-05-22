import React, { Component } from 'react';
import PostList from '../components/PostList';
import {connect} from 'react-redux';

  class Home extends Component {
    constructor(props) {
      super(props);
    }

    render(){
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
