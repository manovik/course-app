export const localStorageApi = {
  clearLocalStorage: () => {
    localStorage.removeItem('u-token');
  },

  setLocalStorage: (token) => {
    localStorage.setItem('u-token', token);
  },

  getFromLocalStorage: () => {
    const storageToken = localStorage.getItem('u-token');

    return { storageToken };
  },
};
