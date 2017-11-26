import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderField from '../Fields/RenderField';
import { addAlert } from '../../actions/alertActions';
import {FormGroup, Col, Button } from 'react-bootstrap';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    const loading = <div><i className="fa fa-circle-o-notch fa-spin fa-fw"></i> Loading</div>;
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <Field label="Nom" name="name" component={renderField} type="text"/>
        <div className="field">
          <p className="control">
            <button disabled={submitting} type="submit" className={'button is-primary is-fullwidth ' + (submitting ? 'is-loading' : '')}>
              Submit
            </button>
          </p>
        </div>
        {/* <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" disabled={submitting} block bsStyle="info">
              {submitting?loading:'Submit'}
            </Button>
          </Col>
        </FormGroup> */}

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
  onSubmitSuccess: (result, dispatch) => {
    dispatch(addAlert('New category created'));
  },
  validate
})(CategoryForm);

CategoryForm.propTypes = {
  edit: PropTypes.bool,
  category: PropTypes.object ,
  handleSubmit: PropTypes.func
};

export default CategoryForm;
