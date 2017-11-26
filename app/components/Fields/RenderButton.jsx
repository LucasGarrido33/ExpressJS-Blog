
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class renderField extends Component {

  render() {
    const {label, type, componentClass} = this.props;

    return (
      // <FormGroup className={componentClass}>
      //     <Button type={type}>
      //       {label}
      //     </Button>
      // </FormGroup>
      <div className="field">
        <p className="control">
          <button type={type} className="button is-fullwidth is-primary">
            {label}
          </button>
        </p>
      </div>
    );
  }
}

renderField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  componentClass: PropTypes.string
};

export default renderField;
