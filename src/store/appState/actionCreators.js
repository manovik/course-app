import * as actions from './actionTypes';

export const setIsLoading = () => ({
  type: actions.LOADING_TRUE,
});

export const setIsNotLoading = () => ({
  type: actions.LOADING_FALSE,
});

export const setErrorMessages = (payload) => ({
  type: actions.SET_ERRORS,
  payload,
});

export const clearErrors = () => ({
  type: actions.CLEAR_ERRORS,
});

export const setAppIsLoaded = () => ({
  type: actions.APP_IS_LOADED,
});
