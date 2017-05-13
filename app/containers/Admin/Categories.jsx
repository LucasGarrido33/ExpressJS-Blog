import React, { Component } from 'react';
import CategoryList from '../../components/Admin/CategoryList';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.deleteCategory = this.deleteCategory.bind(this);

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

    deleteCategory(category){

      const myHeaders = new Headers({
        'Content-Type': 'application/json'
      });

      fetch('/api/admin/categories',
      {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify({category_id: category.id})
      })
      .then((response) => response.json())
      .then((response) => console.log(response));

      const newState = this.state.categories;
      if (newState.indexOf(category) > -1) {
        newState.splice(newState.indexOf(category), 1);
        this.setState({data: newState});
      }

    }

  render(){

    return (
      <CategoryList categories={this.state.categories} onDeleteCategory={this.deleteCategory}/>
    );
  }
}

export default Categories;
