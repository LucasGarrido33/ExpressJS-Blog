import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router';
// import {Button, Glyphicon, ButtonToolbar} from 'react-bootstrap';

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
        {/* <span className="card-list-title"><h4>{this.state.post.title}</h4></span> */}
          <p className="control">
            <label className="label">{this.state.post.title}</label>
          </p>
        <div className="field is-grouped">
          <p className="control">
            <Link className="button is-info is-small" to={'/admin/post/edit/' + this.state.post.id}>
            <span className="icon is-small">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </span>
            <span>Edit</span>
            </Link>
          </p>
          <p className="control">
            <a className="button is-danger is-small" onClick={this.handleDeleteButtonClick}>
              <span className="icon is-small">
                <i className="fa fa-times" aria-hidden="true"></i>
              </span>
              <span>Remove</span>
            </a>
          </p>
        </div>
            {/* <ButtonToolbar>
              <Link to={'/admin/post/edit/' + this.state.post.id}>
                <Button bsSize="small">Edit <Glyphicon glyph="glyphicon glyphicon-edit" /></Button>
              </Link>
              <Button bsSize="small" bsStyle="danger" onClick={this.handleDeleteButtonClick}>Remove <Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
            </ButtonToolbar> */}

      </li>
    );
  }
}

PostListElement.propTypes = {
  post: PropTypes.object.isRequired,
  onHandleDeletePost: PropTypes.func.isRequired
};

export default PostListElement;
