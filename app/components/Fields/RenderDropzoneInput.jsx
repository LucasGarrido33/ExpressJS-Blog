
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

class renderDropzoneInput extends Component {
  constructor() {
   super();
   this.state = {
     files: [],
     dropzoneActive: false
   };
 }

 onDragEnter() {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    });
  }

  onDrop(files) {
    this.setState({
      files,
      dropzoneActive: true
    });
    this.props.input.onChange(files);
  }

  render() {
    let message;
    const { files, dropzoneActive } = this.state;
    const { feedbackIcon, input, label, name, meta:{touched, error } } = this.props;
    const validationState = touched && ( error && 'error' ) || null;

    if ( touched && error ) {
           message = <span className="help-block">{ error }</span>;
       }

    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <Dropzone id="dropzone" name={name} multiple={false}
            onDragEnter={this.onDragEnter.bind(this)}
            onDragLeave={this.onDragLeave.bind(this)}
            onDrop={this.onDrop.bind(this)}>
            { !dropzoneActive && <div>Dropzone.</div> }
            { files && Array.isArray(files) && (files.map((file, i) => <img key={i} src={file.preview}/> ))}
          </Dropzone>
        </div>
        <p className="help is-danger">
          { message }
        </p>
      </div>
      // <FormGroup controlId={input.name} validationState={ validationState }>
      //
      //   <Col componentClass={ControlLabel} sm={2}>
      //     {label}
      //   </Col>
      //
      //   <Col sm={10}>
      //     <Dropzone id="dropzone" name={name} multiple={false}
      //       onDragEnter={this.onDragEnter.bind(this)}
      //       onDragLeave={this.onDragLeave.bind(this)}
      //       onDrop={this.onDrop.bind(this)}>
      //        { !dropzoneActive && <div>Dropzone.</div> }
      //        {files && Array.isArray(files) && (files.map((file, i) => <img key={i} src={file.preview}/> ))}
      //     </Dropzone>
      //   </Col>
      //
      //   <Col smOffset={2} sm={10}>
      //     { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
      //     { message }
      //   </Col>
      //
      //
      // </FormGroup>
    );
  }
}

renderDropzoneInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  name: PropTypes.string
};

export default renderDropzoneInput;
