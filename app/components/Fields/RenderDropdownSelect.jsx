import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

class renderDropdownSelect extends Component {

  render() {
    let message;
    const {feedbackIcon, input, label, type, meta:{touched, error, warning } } = this.props;
    const validationState = touched && ( error && 'error' ) || ( warning && 'warning' ) || null;
    if ( touched && ( error || warning ) ) {
           message = <span className="help-block">{ error || warning }</span>;
       }

    const options = this.props.categories.map((category) => ( <option key={category.id} value={category.id}>{category.name}</option> ));

    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select {...input}>
              <option></option>
              {options}
            </select>
          </div>
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
          <FormControl {...input} placeholder={label} componentClass={type}>
            <option></option>
            {options}
          </FormControl>
        </Col>

        <Col smOffset={2} sm={10}>
          { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
          { message }
        </Col>

      </FormGroup> */
    );
  }
}

renderDropdownSelect.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  categories: PropTypes.array
};

export default renderDropdownSelect;
