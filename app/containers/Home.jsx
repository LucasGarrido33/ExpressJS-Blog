import React, { Component } from 'react';
import PostList from '../components/PostList';
import {loadPostImages} from '../actions/imageActions';
import {connect} from 'react-redux';

  class Home extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const { dispatch, posts } = this.props;
      console.log(posts);
      // dispatch(fetchPostsIfNeeded(selectedSubreddit))
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
