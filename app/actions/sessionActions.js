import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';


export const loginSuccess = () => {
  return {type: types.LOG_IN_SUCCESS};
};

export const loginFail = () => {
  return {type: types.LOG_IN_FAIL};
};

export const logOutUser = () => {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT};
};

export const logInUser = (credentials) => {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      if (response.success===true) {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
      } else {
        throw new Error('Wrong password');
      }
    }).catch(error => {
      throw (error);
    });
  };
};
