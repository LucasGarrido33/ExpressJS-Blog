import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderDropzoneInput from '../../components/Admin/RenderDropzoneInput';
import PropTypes from 'prop-types';

import { Form, FormGroup, Col, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);
  }



  // valider le formulaire avec node util
  // getValidationState(value) {
  //   const length = value.length;
  //   if (length > 1) return null;
  //   else if (length === 0) return 'error';
  // }

  render() {
    const { handleSubmit, categories, submitting } = this.props;


    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label htmlFor="title">title</label>
        <Field name="title" component={renderField} type="text"/>
      </div>
      <div>
        <label htmlFor="content">content</label>
        <Field required name="content" component="input" type="text"/>
      </div>

      <div>
        <label htmlFor="thumbnail">Files</label>
        <Field
          required
          name="thumbnail"
          component={renderDropzoneInput}
        />
      </div>

      {/* <div>
        <label htmlFor="images">Files</label>
        <Field
          name="images"
          component={renderDropzoneInput}
        />
      </div> */}
      <div>
        <label>category</label>
        <div>
          <Field required name="category" component="select">
            <option></option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </Field>
        </div>
      </div>
      <button type="submit" disabled={submitting}>Submit</button>

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
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 15) {

    errors.title = 'Must be 15 characters or less';
  }
  return errors;
};

PostForm = reduxForm({
  form: 'post', // a unique name for this form
  enableReinitialize: true,
  validate
})(PostForm);

export default PostForm;
