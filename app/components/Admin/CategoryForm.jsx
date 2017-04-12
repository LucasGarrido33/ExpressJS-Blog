import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import {browserHistory } from 'react-router';


class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.id;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    fetch('/api/admin/categories', {
      headers: myHeaders,
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title
      })
    })
    .then(response => response.json());

    browserHistory.push('/admin/categories');

    event.preventDefault();
  }

  render() {

    return (
      <Form id="category-form" horizontal method="POST" onSubmit={this.handleSubmit}>
        <FormGroup controlId="title">
          <Col componentClass={ControlLabel} sm={2}>
            Titre
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Titre" value={this.state.title} onChange={this.handleChange}/>
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

export default CategoryForm;
