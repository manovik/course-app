import { AUTHORS_ADD } from './actionTypes';

export const authorsReducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case AUTHORS_ADD:
      return [...state, payload];
    default:
      return state;
  }
};
