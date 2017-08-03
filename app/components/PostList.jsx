import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

class PostList extends Component {

  constructor(props) {
    super(props);
    this.state = {lightboxIsOpen: false, currentImageIndex: 0};

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightBox = this.openLightBox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  closeLightbox(){
    this.setState({ lightboxIsOpen: false });
  }

  openLightBox(index) {
    this.setState({ lightboxIsOpen: true });
    this.setState({ currentImageIndex: index });
  }

  gotoPrevious() {
    let {currentImageIndex} = this.state;
    this.setState({currentImageIndex: currentImageIndex-=1});
  }

  gotoNext() {
    let {currentImageIndex} = this.state;
    this.setState({currentImageIndex: currentImageIndex+=1});
  }

  render(){
    let images = [];
    const posts = this.props.posts.map((post, index) => {
      images.push({src: require('../../uploads/' + post['thumbnail']), caption: post.content});
      return (<div className="thumbnail-container column" id="caption" key={index} onClick={() => this.openLightBox(index)}>
        <span className="text"><h1>{post.title}</h1></span>
        {<img src={require('../../uploads/' + post['thumbnail'])}/> }
      </div>);
    }
  );
  return (
    <div className="gallery">
      <Lightbox
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        images={images}
        onClose={this.closeLightbox}
        currentImage={this.state.currentImageIndex}
      />

      <div className="col-md-6 nopadding">
        {posts.filter((e, i) => !(i%2)) }
      </div>
      <div className="col-md-6 nopadding">
        {posts.filter((e, i) => i%2) }
      </div>
    </div>

  );
}
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
