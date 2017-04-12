import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class PostList extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const posts = this.props.posts.map((post) => <li key={post.id}><Link to={'/post/' + post.id}>{post.title}</Link></li>);

    return (
      <div>
        <ul>{ posts }</ul>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
