import * as types from '../actions/actionTypes';

// takes the current state and an action and it returns the next state
const alerts = (state = [], action) => {
  switch (action.type) {

    case types.LOAD_ALERTS_SUCCESS:
      return action.alerts;

    case types.ADD_ALERT_SUCCESS:
      return [
        ...state.filter(alert => alert.id !== action.alert.id),
        Object.assign({}, action.alert)
      ];

    case types.DISMISS_ALERT_SUCCESS:{
      const newState = Object.assign([], state);
      const indexOfAlert = state.findIndex(alert => {
        return alert.id == action.alert.id;
      });
      newState.splice(indexOfAlert, 1);
      return newState;
    }

    default:
      return state;
  }
};


export default alerts;
