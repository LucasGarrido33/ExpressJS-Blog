import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';


export const loginSuccess = () => {
  return {type: types.LOG_IN_SUCCESS};
};

export const logOutUser = () => {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT};
};

export const logInUser = (credentials) => {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw (error);
    });
  };
};
