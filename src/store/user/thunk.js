import { userService } from 'services';
import { logUserOut } from './actionCreators';

export const logOut = (token) => async (dispatch) => {
  try {
    await userService.logOut(token).then(() => {
      dispatch(logUserOut());
    });
  } catch (err) {
    console.error(err);
  }
};
