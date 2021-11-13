import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { userService } from 'services';

import { localStorageApi } from 'helpers/localStorageApi';

import { logUserIn, setUserToken } from 'store/user/actionCreators';

import { getUser } from 'selectors';

import { logOut } from 'store/user/thunk';

export const useProvideAuth = () => {
  const pageLocation = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector(getUser);

  const saveData = useCallback(
    (data) => {
      localStorageApi.setLocalStorage(data.result);
      dispatch(logUserIn(data.user));
      dispatch(setUserToken(data.result));
    },
    [dispatch]
  );

  const getMyName = useCallback(
    async (token) => {
      userService.getCurrentUser(token).then(({ data }) => {
        const { email, name, role } = data.result;
        const user = name ? name : role;
        dispatch(logUserIn({ email, name: user, role, token }));
      });
    },
    [dispatch]
  );

  const login = useCallback(
    async (params) =>
      userService
        .loginUser(params)
        .then(({ data }) => {
          saveData(data);
          getMyName(data.result);
        })
        .catch((err) => {
          throw err;
        }),
    [saveData, getMyName]
  );

  const register = useCallback(async (params) => {
    return await userService.register(params).catch((err) => {
      throw err;
    });
  }, []);

  const signOut = useCallback(() => {
    dispatch(logOut(userState.token));
    localStorageApi.clearLocalStorage();
  }, [dispatch, userState]);

  useEffect(() => {
    const { storageToken } = localStorageApi.getFromLocalStorage();
    if (storageToken && !userState.isAuth) {
      getMyName(storageToken);
      history.push(pageLocation.pathname);
    }
  }, [getMyName, signOut, history, pageLocation.pathname, userState.isAuth]);

  return {
    user: userState.name,
    isAuth: userState.isAuth,
    role: userState.role,
    login,
    register,
    signOut,
  };
};
