// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {browserHistory} from 'react-router';
//
// class PostInfo extends Component {
//
//   render(){
//
//     if (!this.props.post) {
//       return <div>Loading</div>;
//     }
//     const images = this.props.post.images.map((image) => <img key={image.id} src={require('../../uploads/'+image.path)} width='200px'/>);
//
//     return (
//       <div>
//         <h1>{this.props.post['title']}</h1>
//         <p>{this.props.post['content']}</p>
//         <img src={require('../../uploads/' + this.props.post['thumbnail'])} width='200px'/>
//         {images}
//         <div><button onClick={browserHistory.goBack}>Go Back</button></div>
//       </div>
//     );
//   }
// }
//
// PostInfo.propTypes = {
//   post: PropTypes.object.isRequired
// };
//
// export default PostInfo;
