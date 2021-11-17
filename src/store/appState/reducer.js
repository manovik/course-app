import { appInitState } from './appInitState';
import * as actions from './actionTypes';

export const appState = (state = appInitState, action) => {
  switch (action.type) {
    case actions.LOADING_TRUE:
      return { ...state, isLoading: true };
    case actions.LOADING_FALSE:
      return { ...state, isLoading: false };
    case actions.SET_ERRORS:
      return { ...state, errors: action.payload };
    case actions.CLEAR_ERRORS:
      return { ...state, errors: [] };
    case actions.APP_IS_LOADED:
      return { ...state, firstAppLoad: false };
    default:
      return state;
  }
};
