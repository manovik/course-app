import { USER_LOGIN } from './actionTypes';

const initialUserState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
};

export const userReducer = (state = initialUserState, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuth: true,
        ...payload,
      };
    default:
      return state;
  }
};
