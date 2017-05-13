import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryListItem from './CategoryListItem';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);

  }

  handleDeleteCategory(category) {
    this.props.onDeleteCategory(category);
  }

  render(){

    let categories = this.props.categories.map((category) =>  <CategoryListItem key={category.id} onHandleDeleteCategory={this.handleDeleteCategory} category={category}/>);
    return (
      <div>
        <ul>{ categories }</ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onDeleteCategory: PropTypes.func.isRequired

};

export default CategoryList;
