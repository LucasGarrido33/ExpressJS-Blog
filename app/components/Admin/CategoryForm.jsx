import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      // <Form id="category-form" horizontal method="POST" onSubmit={this.handleSubmit}>
      //   <FormGroup controlId="name">
      //     <Col componentClass={ControlLabel} sm={2}>
      //       Name
      //     </Col>
      //     <Col sm={10}>
      //       <FormControl name="name" type="text" placeholder="Titre" value={this.props.category.name} onChange={this.props.onChange}/>
      //     </Col>
      //   </FormGroup>
      //
      //   <FormGroup>
      //     <Col smOffset={2} sm={10}>
      //       <Button type="submit">
      //         Create
      //       </Button>
      //     </Col>
      //   </FormGroup>
      // </Form>

    );
  }
}

// Decorate the form component
CategoryForm = reduxForm({
  form: 'category', // a unique name for this form
  enableReinitialize: true
})(CategoryForm);

CategoryForm.propTypes = {
  edit: PropTypes.bool,
  category: PropTypes.object ,
  onSubmit: PropTypes.func.isRequired
};

export default CategoryForm;
