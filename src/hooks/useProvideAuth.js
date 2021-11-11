import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { userService } from 'services';

import { localStorageApi } from 'helpers/localStorageApi';

import { logUserIn, logUserOut, setUserToken } from 'store/user/actionCreators';
import { getUser } from 'selectors';

export const useProvideAuth = () => {
  const pageLocation = useLocation();

  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector(getUser);

  const saveData = (data) => {
    localStorageApi.setLocalStorage(data.result);
    dispatch(logUserIn(data.user));
    dispatch(setUserToken(data.result));
  };

  const login = async (params) =>
    await userService
      .loginUser(params)
      .then(({ data }) => {
        saveData(data);
      })
      .catch((err) => {
        throw err;
      });

  const register = async (params) => {
    return await userService.register(params).catch((err) => {
      throw err;
    });
  };

  const signOut = useCallback(() => {
    localStorageApi.clearLocalStorage();
    dispatch(logUserOut());
  }, [dispatch]);

  const getMyName = useCallback(async (token) => {
    return await userService.getCurrentUser(token);
  }, []);

  useEffect(() => {
    const { storageToken } = localStorageApi.getFromLocalStorage();
    if (storageToken) {
      getMyName(storageToken).then(({ data }) => {
        const { email, name } = data.result;
        dispatch(logUserIn({ email, name }));
        history.push(pageLocation.pathname);
      });
    }
    return signOut;
  }, [getMyName, dispatch, signOut, history]);

  return {
    user: userState.name,
    isAuth: userState.isAuth,
    login,
    register,
    signOut,
  };
};
