import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import {browserHistory } from 'react-router';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      category: '',
      images: [],
      categories: [],
      csrfToken: '',
      response: '',
      showErrors: false,
      validationErrors: {}
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

  }

  componentDidMount() {
    fetch('/api/admin/post',
    {credentials: 'same-origin'})
    .then((response) => response.json())
    .then(result => this.setState(
      {
        category: result.categories[0].id,
        categories: result.categories,
        csrfToken: result.csrfToken
      }));
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
      let data = new FormData();
      for (const file in this.state.images) {
        data.append('images', this.state.images[file]);
      }
      data.append('title', this.state.title);
      data.append('content', this.state.content);
      data.append('category', this.state.category);
      data.append('_csrf', this.state.csrfToken);
      fetch('/api/admin/post', {
        credentials: 'same-origin',
        method: 'POST',
        body: data
      })
      .then(response => response.json())
      .then(response => {
        this.setState({validationErrors: response});
        browserHistory.push('/admin/posts');
      });


      event.preventDefault();
    }

    getValidationState(value) {
       const length = value.length;
       if (length > 1) return null;
       else if (length === 0) return 'error';
     }

    render() {
      const categories = this.state.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>);

      return (
        <Form id="post-form" horizontal encType="multipart/form-data" method="POST"  onSubmit={this.handleSubmit}>

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

export default PostForm;
