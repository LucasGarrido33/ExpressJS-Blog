import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class PostList extends Component {

  constructor(props) {
    super(props);
  }
  render(){
    const posts = this.props.posts.map((post) => <Link to={'/post/' + post.id} >{<img src={require('../../uploads/' + post['thumbnail'])}/> }</Link>);

    return (
      <div className="row gallery">
        <div className="col-md-6">
          { posts.filter((e, i) => i % 2) }
        </div>
        <div className="col-md-6">
          { posts.filter((e, i) => !(i % 2)) }
        </div>
      </div>

    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
