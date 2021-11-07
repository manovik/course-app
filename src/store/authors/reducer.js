import * as actions from './actionTypes';

export const authorsReducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case actions.AUTHORS_ADD:
      return [...state, payload];
    case actions.AUTHORS_ADD_LIST:
      return payload;
    default:
      return state;
  }
};
