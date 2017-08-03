import React from 'react';
import {connect} from 'react-redux';
import DraggableList from '../../components/Admin/DraggableList';
import {loadPosts, sortPosts} from '../../actions/postActions';

class SortPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <DraggableList onClick={this.props.onClick} elements={this.props.posts}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (posts) => {
      return dispatch(sortPosts(posts));
    },
    loadPosts: () => {
      return dispatch(loadPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortPosts);
