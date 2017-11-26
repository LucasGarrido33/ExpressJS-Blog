
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

class renderField extends Component {

  render() {
    let message;
    const {feedbackIcon, input, label, type, meta:{touched, error, warning } } = this.props;
    const validationState = touched && ( error && 'error' ) || ( warning && 'warning' ) || null;
    if ( touched && ( error || warning ) ) {
           message = <span className="help-block">{ error || warning }</span>;
       }

    return (

        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={label} {...input}/>
          </div>
          <p className="help is-danger">
            { message }
          </p>
        </div>
        /* <FormGroup controlId={input.name} validationState={ validationState }>

          <Col componentClass={ControlLabel} sm={2}>
            {label}
          </Col>

          <Col sm={10}>
            <FormControl {...input} placeholder={label} type={type}/>
          </Col>

          <Col smOffset={2} sm={10}>
            { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
            { message }
          </Col>

        </FormGroup> */
    );
  }
}

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string
};

export default renderField;
