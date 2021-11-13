import { authorService } from 'services';
import { addAuthors } from './actionCreators';

export const getAllAuthors = () => async (dispatch) => {
  try {
    await authorService.getAll().then((data) => {
      dispatch(addAuthors(data));
    });
  } catch (err) {
    console.error(err);
  }
};
