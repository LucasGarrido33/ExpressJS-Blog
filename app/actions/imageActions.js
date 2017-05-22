// import * as types from './actionTypes';
// import imageApi from '../api/imageApi';
//
//
// export const loadPostImagesSuccess = (posts) => {
//   return {
//     type: types.LOAD_POST_IMAGES_SUCCESS,
//     posts
//   };
// };
//
// export const loadPostImages = (postId) => {
//   return function(dispatch) {
//     return imageApi.getPostImages(postId).then(images => {
//       dispatch(loadPostImagesSuccess(images));
//     }).catch(error => {
//       throw (error);
//     });
//   };
// };
