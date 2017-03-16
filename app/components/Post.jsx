import React, { Component } from 'react';
import {browserHistory} from 'react-router';
class Post extends Component {
  render(){
    return (
      <div>
        <h2>{this.props.params.postId}</h2>
        <div><button onClick={browserHistory.goBack}>Go Back</button></div>
      </div>
    );
  }
}

export default Post;
