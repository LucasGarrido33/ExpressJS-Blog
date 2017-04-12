import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import {Button, Glyphicon } from 'react-bootstrap';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  handleClick(post){

    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    fetch('/api/admin/',
    {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify({post_id: post.id})
    })
    .then((response) => response.json())
    .then((response) => console.log(response));

    const newState = this.state.posts;
    if (newState.indexOf(post) > -1) {
      newState.splice(newState.indexOf(post), 1);
      this.setState({data: newState});
    }

  }

  render(){
    let posts = this.props.posts.map((post) =>
    <li key={post.id}>
      <Link to={'admin/post/edit/' + post.id}>{post.title}</Link>
      <Button bsSize="small" onClick={this.handleClick.bind(this, post)}><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
    </li>);

    return (
      <div>
        <ul>{ posts }</ul>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
