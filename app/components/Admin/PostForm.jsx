import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderDropzoneInput from '../Fields/RenderDropzoneInput';
import renderDropdownSelect from '../Fields/renderDropdownSelect';
import PropTypes from 'prop-types';
import renderField from '../Fields/RenderField';
import { FormGroup, Col, Button } from 'react-bootstrap';

class PostForm extends Component {

  render() {
    const { handleSubmit, categories, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="form-horizontal">

        <Field label="Titre" name="title" component={renderField} type="text"/>

        <Field label="Description" name="content" component={renderField} type="text"/>

        <Field label="Image" name="thumbnail" component={renderDropzoneInput}/>

        <Field type="select" label="Categorie" name="category" categories={categories} component={renderDropdownSelect}/>

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

PostForm.propTypes = {
  edit: PropTypes.bool,
  post: PropTypes.object ,
  categories: PropTypes.array ,
  onSubmit: PropTypes.func.isRequired
};

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less';
  }

  if (!values.content){
    errors.content = 'Required';
  } else if (values.content.length > 15){
    errors.content = 'Must be 15 carachters or less';
  }
  if (!values.thumbnail){
    errors.thumbnail = 'Required';
  }

  if (!values.category){
    errors.category = 'Required';
  }
  return errors;
};

PostForm = reduxForm({
  form: 'post', // a unique name for this form
  enableReinitialize: true,
  validate
})(PostForm);

export default PostForm;
