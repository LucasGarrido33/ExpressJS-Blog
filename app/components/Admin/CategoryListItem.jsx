import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router';
import {Button, Glyphicon , ButtonToolbar} from 'react-bootstrap';

class CategoryListElement extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  }

  handleDeleteButtonClick(){
    this.props.onHandleDeleteCategory(this.props.category);
  }

  render(){
    return (
      <li className="list-group-item">
        <span className="card-list-title"><h4>{this.props.category.name}</h4></span>
        <ButtonToolbar>

        <Link to={'/admin/category/edit/' + this.props.category.id}>
          <Button bsSize="small">Edit <Glyphicon glyph="glyphicon glyphicon-edit"/></Button>
        </Link>
        <Button bsSize="small" bsStyle="danger" onClick={this.handleDeleteButtonClick}>Remove <Glyphicon glyph="glyphicon glyphicon-remove"/></Button>
      </ButtonToolbar>
      </li>
    );
  }
}

CategoryListElement.propTypes = {
  category: PropTypes.object.isRequired,
  onHandleDeleteCategory: PropTypes.func.isRequired
};

export default CategoryListElement;
