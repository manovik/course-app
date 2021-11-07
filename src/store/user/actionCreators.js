import * as actions from './actionTypes';

export const logUserIn = (payload) => ({ type: actions.USER_LOGIN, payload });
export const setUserToken = (payload) => ({ type: actions.SET_TOKEN, payload });
export const logUserOut = () => ({ type: actions.USER_LOGOUT });
