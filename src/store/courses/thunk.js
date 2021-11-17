import { coursesAPI } from 'services';
import {
  addCoursesToStore,
  deleteCourseFromStore,
  updateCourses,
} from './actionCreators';

export const addNewCourse = (newCourse) => async (dispatch) => {
  try {
    const { result, successful } = await coursesAPI.addCourse(newCourse);
    if (successful) {
      dispatch(addCoursesToStore([result]));
    }
  } catch (err) {
    console.error(err);
  }
};

export const updateCourse = (newCourse) => async (dispatch) => {
  try {
    const { result, successful } = await coursesAPI.updateCourse(newCourse);
    if (successful) {
      dispatch(updateCourses(result));
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    const { successful } = await coursesAPI.deleteCourse(id);
    if (successful) {
      dispatch(deleteCourseFromStore(id));
    }
  } catch (err) {
    console.error(err);
  }
};

export const getAllCourses = () => async (dispatch) => {
  try {
    await coursesAPI.getAllCourses().then((data) => {
      dispatch(addCoursesToStore(data));
    });
  } catch (err) {
    console.error(err);
  }
};
