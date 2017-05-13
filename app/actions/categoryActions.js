import * as types from './actionTypes';
import categoryApi from '../api/categoryApi';


export const loadCategoriesSuccess = (categories) => {
  return {
    type: types.LOAD_CATEGORIES_SUCCESS,
    categories
  };
};

export const loadCategories = () => {
  return function(dispatch) {
    return categoryApi.getAllCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw (error);
    });
  };
};
