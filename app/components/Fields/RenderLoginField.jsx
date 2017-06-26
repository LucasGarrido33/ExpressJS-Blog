
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
      <FormGroup  controlId={input.name} validationState={validationState}>
        <div className="row">

        <Col smOffset={4} sm={4}>

          <FormControl {...input} placeholder={label} type={type} />

        </Col>
      </div>
      <div className="row">
        <Col smOffset={4} sm={4}>
          { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
          { message }
        </Col>
      </div>
      </FormGroup>

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
