import * as types from './actionTypes';
import postApi from '../api/postApi';


export const loadPostsSuccess = (posts) => {
  return {
    type: types.LOAD_POSTS_SUCCESS,
    posts
  };
};
export const createPostSuccess = (post) => {
  return {
    type: types.CREATE_POST_SUCCESS,
    post
  };
};
export const deletePostSuccess = (post) => {
  return {
    type: types.DELETE_POST_SUCCESS,
    post
  };
};

export const updatePostSuccess = (post) => {
  return {
    type: types.UPDATE_POST_SUCCESS,
    post
  };
};


export const loadPosts = () => {
  return function(dispatch) {
    return postApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw (error);
    });
  };
};

export const createPost = (post) => {
  return function(dispatch) {
    return postApi.createPost(post).then(() => {
      dispatch(createPostSuccess(post));
    }).catch(error => {
      throw (error);
    });
  };
};

export const deletePost = (post) => {
  return function(dispatch) {
    return postApi.deletePost(post).then(() => {
      dispatch(deletePostSuccess(post));
    }).catch(error => {
      throw (error);
    });
  };
};

export const updatePost = (post) => {
  return function(dispatch) {
    return postApi.updatePost(post).then((responsePost) => {
      dispatch(updatePostSuccess(responsePost));
    }).catch(error => {
      throw (error);
    });
  };
};
