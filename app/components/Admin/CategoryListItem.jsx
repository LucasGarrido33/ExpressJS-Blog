import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router';
import {Button, Glyphicon } from 'react-bootstrap';

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
      <li>
        <Link to={'/admin/category/edit/' + this.props.category.id}>{this.props.category.name}</Link>
        <Button bsSize="small" onClick={this.handleDeleteButtonClick}><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
      </li>
    );
  }
}

CategoryListElement.propTypes = {
  category: PropTypes.object.isRequired,
  onHandleDeleteCategory: PropTypes.func.isRequired
};

export default CategoryListElement;
