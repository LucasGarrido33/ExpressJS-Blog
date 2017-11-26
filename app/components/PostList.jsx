import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import LazyLoad from 'react-lazyload';

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
      images.push({src: post['thumbnail'], caption: post.content});
      return (
          <li  className="caption" key={index} onClick={() => this.openLightBox(index)}>
          <LazyLoad height={200} offset={200}>
            <img className="image" src={post['thumbnail']}/>
          </LazyLoad>
          <div className="overlay">
            <div className="text">{post.title}</div>
          </div>
          </li>);
    }
  );
  return (
    <div>
      <Lightbox
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        images={images}
        onClose={this.closeLightbox}
        currentImage={this.state.currentImageIndex}
      />
      {/* <div className="column">
        {posts.filter((e, i) => !(i%2)) }
      </div>
      <div className="column">
        {posts.filter((e, i) => i%2) }
      </div> */}
      <ul className="grid has-text-centered caption-style-4">
        {posts}
      </ul>
    </div>

  );
}
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
