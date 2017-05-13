import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryForm from '../../components/Admin/CategoryForm';

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(`/api/category/${this.props.params.categoryId}`,
      {credentials: 'same-origin'})
      .then((response) => response.json())
      .then(category => this.setState(
        {
          category: category
        }));
      }

  handleSubmit(name) {

    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    fetch(`/api/category/${this.props.params.categoryId}`,
      {
        credentials: 'same-origin',
        headers: myHeaders,
        method: 'PUT',
        body: JSON.stringify({
          name: name
        })
      }).then(response => response.json());

    }

    render() {

      return (
        <CategoryForm edit={true} onSubmit={this.handleSubmit} category={this.state.category}/>
      );
    }

  }

  EditCategory.propTypes = {
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired
    })

  };

  export default EditCategory;
