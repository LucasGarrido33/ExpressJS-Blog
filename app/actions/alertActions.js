import * as types from './actionTypes';


export const loadAlerts = () => {
  return {type: types.LOAD_ALERTS_SUCCESS};
};

export const addAlert = (message) => {
  return {type: types.ADD_ALERT_SUCCESS, alert: {
    id: (new Date()).getTime(),
    type: 'success',
    headline: 'Success',
    message: message
  }};
};

export const dismissAlert = (alert) => {
  return {type: types.DISMISS_ALERT_SUCCESS, alert: alert};
};
