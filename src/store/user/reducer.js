import * as actions from './actionTypes';
import { initialUserState } from './initialUserState';

export const userReducer = (state = initialUserState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        isAuth: true,
        ...payload,
      };
    case actions.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case actions.USER_LOGOUT:
      return initialUserState;
    default:
      return state;
  }
};
