import { useState, useEffect } from 'react';

import { courseAPI, ENDPOINTS } from 'services';

import { localStorageApi } from 'helpers/localStorageApi';

export const useProvideAuth = () => {
  const [user, setUser] = useState('');

  const login = async (params) => {
    return await courseAPI
      .post(`/${ENDPOINTS.LOGIN}`, params)
      .then(({ data }) => {
        localStorageApi.setLocalStorage(data);

        setUser(data.user.name);
      })
      .catch(console.error);
  };

  const register = async (params) => {
    return await courseAPI
      .post(`/${ENDPOINTS.REGISTER}`, params)
      .then(({ data }) => {
        if (data.successful) {
          return data;
        }
        throw new Error(
          `Error occurred while trying to register user!\n${data.errors.join(
            '\n'
          )}`
        );
      })
      .catch(console.error);
  };

  const signOut = () => {
    localStorageApi.clearLocalStorage();
    setUser('');
  };

  useEffect(() => {
    const { storageToken, storageUserName } =
      localStorageApi.getFromLocalStorage();
    if (storageToken && storageUserName) {
      setUser(storageUserName);
    }
    return () => signOut();
  }, []);

  return {
    user,
    login,
    register,
    signOut,
  };
};
