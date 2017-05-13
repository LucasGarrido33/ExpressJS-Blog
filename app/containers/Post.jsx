import React, { Component } from 'react';
import PostInfo from '../components/PostInfo';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  // componentDidMount() {
  //   fetch(`/api/post/${this.props.params.postId}`,
  //     { credentials: 'same-origin'})
  //   .then((response) => response.json())
  //   .then(post => this.setState(
  //     {
  //       post: post
  //     }));
  // }

  render(){
    if (!this.props.post) {
      return <div>Loading</div>;
    }
    return (
      <PostInfo post={this.props.post}/>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

// function collectPostImages(images, post) {
//   let selected = images.map(image => {
//     if (post.hobby_ids.filter(hobbyId => hobbyId  post.id).length > 0) {
//       return hobby;
//     }
//   })
//   return selected.filter(el => el != undefined)
// }

function mapStateToProps(state, ownProps) {
  let post = {name: '', images: []};
  const postId = ownProps.params.postId;
  if (state.posts.length > 0) {
    post = Object.assign({}, state.posts.find(post => post.id == postId));
  }
  return {post: post};
};

export default connect(mapStateToProps)(Post);
