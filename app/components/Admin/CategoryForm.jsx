import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import {browserHistory } from 'react-router';


class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.edit){
      this.setState( {
        name: nextProps.category.name
      });
    }

  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.name);
    event.preventDefault();
    browserHistory.push('/admin/categories');

  }

  handleChange(event) {
    const target = event.target;
    const name = target.id;
    this.setState({
      [name]: target.value
    });
  }

  render() {

    return (
      <Form id="category-form" horizontal method="POST" onSubmit={this.handleSubmit}>
        <FormGroup controlId="name">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Titre" value={this.state.name} onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Create
            </Button>
          </Col>
        </FormGroup>
      </Form>

    );
  }
}

CategoryForm.propTypes = {
  edit: PropTypes.bool,
  category: PropTypes.object ,
  onSubmit: PropTypes.func.isRequired

};

export default CategoryForm;
