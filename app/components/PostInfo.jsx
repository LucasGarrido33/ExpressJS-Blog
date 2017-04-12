import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router';

class PostInfo extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    if (!this.props.post) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <p>{this.props.post['id']}</p>
        <p>{this.props.post['title']}</p>
        <p>{this.props.post['content']}</p>
        <p>{this.props.post['thumbnail_path']}</p>

        <div><button onClick={browserHistory.goBack}>Go Back</button></div>
      </div>
    );
  }

}

PostInfo.propTypes = {
  post: PropTypes.object.required
};

export default PostInfo;
