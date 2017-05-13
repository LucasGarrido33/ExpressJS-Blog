import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, Col, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      category: '',
      images: [],
      categories: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.edit) {
      this.setState(
        {
          title: nextProps.post.title,
          content: nextProps.post.content,
          category: nextProps.post.category.id
        }
      );
    } else {
      this.setState(
        {
          category: nextProps.categories[0].id
        }
      );
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.id;
    this.setState({
      [name]: target.value
    });
  }

  handleImageChange(event) {
    this.setState({images: event.target.files});
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.title, this.state.content, this.state.category, this.state.images);
    event.preventDefault();
  }

  // valider le formulaire avec node util
  getValidationState(value) {
    const length = value.length;
    if (length > 1) return null;
    else if (length === 0) return 'error';
  }

  render() {
    const categories = this.props.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>);
    return (
      <Form id="post-form" horizontal encType="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>

      <FormGroup controlId="title" validationState={this.getValidationState(this.state.title)} >
        <Col componentClass={ControlLabel} sm={2}>
          Titre
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Titre" value={this.state.title} onChange={this.handleChange}/>
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </Col>
      </FormGroup>

      <FormGroup controlId="content" validationState={this.getValidationState(this.state.content)}>
        <Col componentClass={ControlLabel} sm={2}>
          Description
        </Col>
        <Col sm={10}>
          <FormControl componentClass="textarea" placeholder="Description" value={this.state.content} onChange={this.handleChange}/>
          <FormControl.Feedback />
        </Col>
      </FormGroup>

      <FormGroup controlId="category">
        <Col componentClass={ControlLabel} sm={2}>
          Categorie
        </Col>
        <Col sm={10}>
          <FormControl componentClass="select" value={this.state.category} onChange={this.handleChange}>
            {categories}
          </FormControl>
        </Col>
      </FormGroup>

      <FormGroup controlId="images">
        <Col componentClass={ControlLabel} sm={2}>
          Images
        </Col>
        <Col sm={10}>
          <FormControl name='images' multiple='multiple' type="file" onChange={this.handleImageChange}/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Create
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
}

PostForm.propTypes = {
  edit: PropTypes.bool,
  post: PropTypes.object ,
  categories: PropTypes.array ,
  onSubmit: PropTypes.func.isRequired

};
export default PostForm;
