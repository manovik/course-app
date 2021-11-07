import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { courseAPI, ENDPOINTS } from 'services';

import { localStorageApi } from 'helpers/localStorageApi';

import { logUserIn, logUserOut, setUserToken } from 'store/user/actionCreators';

export const useProvideAuth = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const saveData = (data) => {
    localStorageApi.setLocalStorage(data.result);
    dispatch(logUserIn(data.user));
    dispatch(setUserToken(data.result));
  };

  const login = async (params) => {
    return await courseAPI
      .post(`${ENDPOINTS.LOGIN}`, params)
      .then(({ data }) => {
        saveData(data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const register = async (params) => {
    return await courseAPI
      .post(`${ENDPOINTS.REGISTER}`, params)
      .catch((err) => {
        throw err;
      });
  };

  const signOut = useCallback(() => {
    localStorageApi.clearLocalStorage();
    dispatch(logUserOut());
  }, [dispatch]);

  const getMyName = useCallback(async (token) => {
    return await courseAPI.get(ENDPOINTS.GET_ME, {
      headers: {
        Authorization: token,
      },
    });
  }, []);

  useEffect(() => {
    const { storageToken } = localStorageApi.getFromLocalStorage();
    if (storageToken) {
      getMyName(storageToken).then(({ data }) => {
        const { email, name } = data.result;
        dispatch(logUserIn({ email, name }));
      });
    }
    return signOut;
  }, [getMyName, dispatch, signOut]);

  return {
    user: userState.name,
    isAuth: userState.isAuth,
    login,
    register,
    signOut,
  };
};
