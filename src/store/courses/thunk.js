import { courseService } from 'services';
import { addCoursesToStore, deleteCourseFromStore } from './actionCreators';

export const addNewCourse = (newCourse) => async (dispatch) => {
  try {
    const { result, successful } = await courseService.add(newCourse);
    if (successful) {
      dispatch(addCoursesToStore([result]));
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    const { successful } = await courseService.delete(id);
    if (successful) {
      dispatch(deleteCourseFromStore(id));
    }
  } catch (err) {
    console.error(err);
  }
};

export const getAllCourses = () => async (dispatch) => {
  try {
    await courseService.getAll().then((data) => {
      dispatch(addCoursesToStore(data));
    });
  } catch (err) {
    console.error(err);
  }
};
