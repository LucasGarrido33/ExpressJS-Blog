import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router';
import {Button, Glyphicon } from 'react-bootstrap';

class PostListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  }

  handleDeleteButtonClick(){
    this.props.onHandleDeletePost(this.state.post);
  }

  render(){
    return (
      <li>
        <Link to={'/admin/post/edit/' + this.state.post.id}>{this.state.post.title}</Link>
        <Button bsSize="small" onClick={this.handleDeleteButtonClick}><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
      </li>
    );
  }
}

PostListElement.propTypes = {
  post: PropTypes.object.isRequired,
  onHandleDeletePost: PropTypes.func.isRequired
};

export default PostListElement;
