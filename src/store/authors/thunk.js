import { coursesAPI } from 'services';
import { addAuthors } from './actionCreators';

export const getAllAuthors = () => async (dispatch) => {
  try {
    await coursesAPI.getAllAuthors().then((data) => {
      dispatch(addAuthors(data));
    });
  } catch (err) {
    console.error(err);
  }
};
