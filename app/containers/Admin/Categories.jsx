import React, { Component } from 'react';
import CategoryList from '../../components/Admin/CategoryList';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch('/api/admin/categories',
    {credentials: 'same-origin'})
    .then((response) => response.json())
    .then(result => this.setState(
      {
        categories: result.categories
      }));
  }

  render(){

    return (
      <CategoryList categories={this.state.categories}/>
    );
  }
}

export default Categories;
