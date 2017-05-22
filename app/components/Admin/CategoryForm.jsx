import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.category);
  }

  render() {

    return (
      <Form id="category-form" horizontal method="POST" onSubmit={this.handleSubmit}>
        <FormGroup controlId="name">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl name="name" type="text" placeholder="Titre" value={this.props.category.name} onChange={this.props.onChange}/>
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
