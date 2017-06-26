
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Col,  Button } from 'react-bootstrap';

class renderField extends Component {

  render() {
    const {label, type, componentClass} = this.props;

    return (
      <FormGroup className={componentClass}>
          <Button type={type}>
            {label}
          </Button>
      </FormGroup>
    );
  }
}

renderField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  componentClass: PropTypes.string
};

export default renderField;
