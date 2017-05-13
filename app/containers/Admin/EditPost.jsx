import React, { Component } from 'react';
import PostForm from '../../components/Admin/PostForm';
import {browserHistory } from 'react-router';

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      categories: [],
      csrfToken: ''
    };
  }

  componentDidMount() {
    fetch(`/api/admin/post/${this.props.params.postId}`,
      {credentials: 'same-origin'})
      .then((response) => response.json())
      .then(result => this.setState(
        {
          post: result.post,
          categories: result.categories,
          csrfToken: result.csrfToken
        }
      )
    );
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
      <PostForm edit={true} csrfToken={this.state.csrfToken} post={this.state.post} categories={this.state.categories}/>
    );
  }
}

export default EditPost;
