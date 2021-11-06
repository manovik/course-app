const { USER_LOGIN } = require('./actionTypes');

export const logUserIn = (payload) => ({ type: USER_LOGIN, payload });
