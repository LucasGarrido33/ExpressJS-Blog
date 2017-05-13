import React, { Component } from 'react';
import CategoryForm from '../../components/Admin/CategoryForm';

class NewCategory extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(name) {

    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    fetch('/api/admin/categories', {
      headers: myHeaders,
      method: 'POST',
      body: JSON.stringify({
        name: name
      })
    })
    .then(response => response.json());

  }

  render() {

    return (
      <CategoryForm onSubmit={this.handleSubmit} />
    );
  }
}

export default NewCategory;
