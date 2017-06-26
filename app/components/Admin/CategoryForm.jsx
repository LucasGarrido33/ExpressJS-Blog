import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderField from '../Fields/RenderField';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <Field label="Nom" name="name" component={renderField} type="text"/>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Submit
            </Button>
          </Col>
        </FormGroup>

      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  return errors;
};

// Decorate the form component
CategoryForm = reduxForm({
  form: 'category', // a unique name for this form
  enableReinitialize: true,
  validate
})(CategoryForm);

CategoryForm.propTypes = {
  edit: PropTypes.bool,
  category: PropTypes.object ,
  handleSubmit: PropTypes.func
};

export default CategoryForm;
