import { APP } from 'appConstants';
import { localStorageApi } from 'helpers/localStorageApi';
import { coursesAPI } from 'services';
import { logUserIn, logUserOut, setUserToken } from './actionCreators';

export const getCurrentUser = (token, history) => async (dispatch) => {
  try {
    const { data } = await coursesAPI.getCurrentUser(token);
    dispatch(setUserToken(token));
    dispatch(logUserIn(data.result));
  } catch (err) {
    console.error(err);
    localStorageApi.clearLocalStorage();
    dispatch(logUserOut());
    history.push(APP.LOGIN);
  }
};

export const logIn = (userData) => async (dispatch) => {
  try {
    const data = await coursesAPI.loginUser(userData);
    dispatch(logUserIn(data));
  } catch (err) {
    console.error(err);
  }
};

export const logOut = (token) => async (dispatch) => {
  try {
    await coursesAPI.logOut(token);
    dispatch(logUserOut());
  } catch (err) {
    console.error(err);
  }
};
