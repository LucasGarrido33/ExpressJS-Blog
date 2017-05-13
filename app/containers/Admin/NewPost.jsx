import React, { Component } from 'react';
import PostForm from '../../components/Admin/PostForm';
import {browserHistory } from 'react-router';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      csrfToken: '',
      response: ''
     };
     this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    fetch('/api/admin/post',
    {credentials: 'same-origin'})
    .then((response) => response.json())
    .then(result => this.setState(
      {
        categories: result.categories,
        csrfToken: result.csrfToken
      }));
    }

    handleSubmit(title, content, category, images) {
      let data = new FormData();
      for (const file in images) {
        data.append('images', images[file]);
      }
      data.append('title', title);
      data.append('content', content);
      data.append('category', category);
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


    }

    render() {
      return (
        <PostForm csrfToken={this.state.csrfToken} onSubmit={this.handleSubmit} categories={this.state.categories}/>
      );
  }
}

export default NewPost;
