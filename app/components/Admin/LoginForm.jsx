import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import loginField from '../Fields/RenderLoginField';
import Button from '../Fields/RenderButton.jsx';

class LoginForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="text-center">Hello Honey</h1>
        <Field label="Mot de passe" name="password" component={loginField} type="text"/>
        <Button componentClass="text-center" label="login" type="input"/>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func
};

const validate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

LoginForm = reduxForm({
  form: 'login', // a unique name for this form
  enableReinitialize: true,
  validate
})(LoginForm);

export default LoginForm;
