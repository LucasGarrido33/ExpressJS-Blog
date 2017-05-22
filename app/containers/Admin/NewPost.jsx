import React, { Component } from 'react';
import PostForm from '../../components/Admin/PostForm';
import {connect} from 'react-redux';
import {createPost} from '../../actions/postActions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csrfToken: ''
    };
  }

  updatePostState(event) {
    const field = event.target.name;
    const post = this.state.post;
    post[field] = event.target.value;
    return this.setState({post: post});
  }

  render() {
    return (
      <PostForm onSubmit={this.props.onCreateClick} categories={this.props.categories}/>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateClick: (post) => {
      dispatch(createPost(post));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
