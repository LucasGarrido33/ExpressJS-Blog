import * as types from './actionTypes';
import categoryApi from '../api/categoryApi';


export const loadCategoriesSuccess = (categories) => {
  return {
    type: types.LOAD_CATEGORIES_SUCCESS,
    categories
  };
};

export function deleteCategorySuccess(category) {
  return {
    type: types.DELETE_CATEGORY_SUCCESS,
    category
  };
}

export function updateCategorySuccess(category) {
  return {
    type: types.UPDATE_CATEGORY_SUCCESS,
    category
  };
}
export function createCategorySuccess(category) {
  return {
    type: types.CREATE_CATEGORY_SUCCESS,
    category
  };
}

export const loadCategories = () => {
  return function(dispatch) {
    return categoryApi.getAllCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw (error);
    });
  };
};

export const deleteCategory = (category) => {
  return function(dispatch) {
    return categoryApi.deleteCategory(category).then(() => {
      dispatch(deleteCategorySuccess(category));
    }).catch(error => {
      throw (error);
    });
  };
};

export const createCategory = (category) => {
  return function(dispatch) {
    return categoryApi.createCategory(category).then((responseCategory) => {
      dispatch(createCategorySuccess(responseCategory));
    }).catch(error => {
      throw (error);
    });
  };
};
export const updateCategory = (category) => {
  return function(dispatch) {
    return categoryApi.updateCategory(category).then((responseCategory) => {
      dispatch(updateCategorySuccess(responseCategory));
    }).catch(error => {
      throw (error);
    });
  };
};
