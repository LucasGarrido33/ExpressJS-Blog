import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import {Button, Glyphicon } from 'react-bootstrap';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  handleClick(category){

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
    let categories = this.props.categories.map((category) =>
    <li key={category.id}>
      <Link to={'/admin/category/edit/' + category.id }>{category.name}</Link>
      <Button bsSize="small" onClick={this.handleClick.bind(this, category)}><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
    </li>);

    return (
      <div>
        <ul>{ categories }</ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoryList;
