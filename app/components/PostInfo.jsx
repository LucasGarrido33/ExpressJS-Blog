import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';

class PostInfo extends Component {

  render(){

    if (!this.props.post) {
      return <div>Loading</div>;
    }
    const images = this.props.post.images.map((image) => <img key={image.id} src={require('../../uploads/'+image.path)} width='200px'/>);

    return (
      <div>
        <p>{this.props.post['id']}</p>
        <p>{this.props.post['title']}</p>
        <p>{this.props.post['content']}</p>
        <p>{this.props.post['thumbnail_path']}</p>
        {images}
        <div><button onClick={browserHistory.goBack}>Go Back</button></div>
      </div>
    );
  }

}

PostInfo.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostInfo;
