export const localStorageApi = {
  clearLocalStorage: () => {
    localStorage.removeItem('u-token');
    localStorage.removeItem('u-name');
  },

  setLocalStorage: ({ result, user }) => {
    localStorage.setItem('u-token', result);
    localStorage.setItem('u-name', user.name);
  },

  getFromLocalStorage: () => {
    const storageToken = localStorage.getItem('u-token');
    const storageUserName = localStorage.getItem('u-name');

    return { storageToken, storageUserName };
  },
};
