import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { userService } from 'services';

import { localStorageApi } from 'helpers/localStorageApi';

import { logUserIn } from 'store/user/actionCreators';

import { getUser } from 'selectors';

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
    async (params) =>
      userService
        .loginUser(params)
        .then(({ data }) => {
          saveData(data);
          dispatch(getCurrentUser(data.result));
        })
        .catch((err) => {
          console.warn(err);
        }),
    [saveData, dispatch]
  );

  const register = useCallback(async (params) => {
    return await userService.register(params).catch((err) => {
      console.warn(err);
    });
  }, []);

  const signOut = useCallback(() => {
    dispatch(logOut(userState.token));
    localStorageApi.clearLocalStorage();
  }, [dispatch, userState]);

  useEffect(() => {
    const { storageToken } = localStorageApi.getFromLocalStorage();
    if (storageToken && !userState.isAuth) {
      try {
        dispatch(getCurrentUser(storageToken));
        pageLocation.pathname !== APP.ROOT &&
          history.push(pageLocation.pathname);
      } catch (err) {
        console.warn(err);
      }
    }
  }, [dispatch, signOut, history, userState]);

  return {
    user: userState.name,
    isAuth: userState.isAuth,
    role: userState.role,
    login,
    register,
    signOut,
  };
};
