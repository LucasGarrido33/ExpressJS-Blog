import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router';
import {Button, Glyphicon, ButtonToolbar} from 'react-bootstrap';

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
      <li className="list-group-item">
            <span className="card-list-title"><h4>{this.state.post.title}</h4></span>
            <ButtonToolbar>
              <Link to={'/admin/post/edit/' + this.state.post.id}>
                <Button bsSize="small">Edit <Glyphicon glyph="glyphicon glyphicon-edit" /></Button>
              </Link>
              <Button bsSize="small" bsStyle="danger" onClick={this.handleDeleteButtonClick}>Remove <Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
            </ButtonToolbar>

      </li>
    );
  }
}

PostListElement.propTypes = {
  post: PropTypes.object.isRequired,
  onHandleDeletePost: PropTypes.func.isRequired
};

export default PostListElement;
