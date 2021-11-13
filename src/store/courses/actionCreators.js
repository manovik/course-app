import * as actions from './actionTypes';

export const addCoursesToStore = (payload) => ({
  type: actions.COURSES_ADD,
  payload: payload,
});

export const deleteCourseFromStore = (payload) => ({
  type: actions.COURSES_REMOVE,
  payload,
});

export const updateCourses = (payload) => ({
  type: actions.COURSES_UPDATE,
  payload,
});
