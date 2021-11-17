import { ACTIONS } from './actions';

import { initCourse } from 'appConstants';

export const reset = () => {
  return initCourse;
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_TITLE:
      return {
        ...state,
        title: payload,
      };
    case ACTIONS.SET_DESCR:
      return {
        ...state,
        description: payload,
      };
    case ACTIONS.SET_DURATION:
      return {
        ...state,
        duration: payload,
      };
    case ACTIONS.SET_AUTHORS:
      return {
        ...state,
        authors: payload,
      };
    case ACTIONS.FULL_UPD:
      return {
        ...state,
        ...payload,
      };
    case ACTIONS.RESET:
      return reset();
    default:
      throw new Error(`Action {type: ${type}} not found`);
  }
};
