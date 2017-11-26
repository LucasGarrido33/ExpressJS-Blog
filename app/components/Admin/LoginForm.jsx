import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import loginField from '../Fields/RenderLoginField';
import Button from '../Fields/RenderButton.jsx';

class LoginForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="box">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="has-text-centered title is-4 has-text-grey">Honey Dashboard</h1>
          <Field label="Password" name="password" component={loginField} type="password"/>
          <Button componentClass="text-center" label="Login" type="submit"/>
        </form>
      </div>
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
