import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { coursesAPI } from 'services';

import { localStorageApi } from 'helpers/localStorageApi';

import { logUserIn } from 'store/user/actionCreators';
import {
  setErrorMessages,
  setIsLoading,
  setIsNotLoading,
} from 'store/appState/actionCreators';

import { getUser } from 'store/selectors';

import { getCurrentUser, logOut } from 'store/user/thunk';

import { APP } from 'appConstants';

export const useProvideAuth = () => {
  const pageLocation = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector(getUser);

  const saveData = useCallback(
    (data) => {
      localStorageApi.setLocalStorage(data.result);
      dispatch(logUserIn(data.user));
    },
    [dispatch]
  );

  const login = useCallback(
    async (params) => {
      dispatch(setIsLoading());
      coursesAPI
        .loginUser(params)
        .then(({ data }) => {
          saveData(data);
          dispatch(getCurrentUser(data.result, history));
          dispatch(setIsNotLoading());
        })
        .catch((err) => {
          dispatch(setIsNotLoading());
          console.warn(err);
          dispatch(setErrorMessages([err.response.data?.result]));
        });
    },
    [saveData, dispatch, history]
  );

  const register = useCallback(
    async (params) => {
      dispatch(setIsLoading());
      coursesAPI
        .register(params)
        .then(() => {
          dispatch(setIsNotLoading());
          history.push(APP.LOGIN);
        })
        .catch((err) => {
          dispatch(setIsNotLoading());
          console.warn({ err });
          dispatch(setErrorMessages(err.response.data?.errors));
          return err.response;
        });
    },
    [dispatch, history]
  );

  const signOut = useCallback(() => {
    dispatch(logOut(userState.token));
    localStorageApi.clearLocalStorage();
  }, [dispatch, userState]);

  const checkTokenAuth = useCallback(() => {
    const { storageToken } = localStorageApi.getFromLocalStorage();
    if (storageToken && !userState.isAuth) {
      dispatch(getCurrentUser(storageToken, history));
      pageLocation.pathname !== APP.ROOT && history.push(pageLocation.pathname);
    }
  }, [dispatch, pageLocation.pathname, history, userState.isAuth]);

  useEffect(() => {
    checkTokenAuth();
  }, [checkTokenAuth]);

  return {
    login,
    register,
    signOut,
  };
};
