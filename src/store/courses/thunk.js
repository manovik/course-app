import { courseService } from 'services';
import { addCourseToStore, deleteCourseFromStore } from './actionCreators';

export const addNewCourse = (newCourse) => async (dispatch) => {
  try {
    const result = await courseService.add(newCourse);
    if (result) {
      dispatch(addCourseToStore(newCourse));
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    const { successful, result } = await courseService.delete(id);
    if (successful) {
      dispatch(deleteCourseFromStore(id));
      console.log(result);
    }
  } catch (err) {
    console.error(err);
  }
};
