import * as actions from './actionTypes';

export const addCourseToStore = (payload) => ({
  type: actions.COURSES_ADD,
  payload,
});

export const deleteCourseFromStore = (payload) => ({
  type: actions.COURSES_REMOVE,
  payload,
});

export const addCourseList = (payload) => ({
  type: actions.COURSES_ADD_LIST,
  payload,
});

export const updateCourses = (payload) => ({
  type: actions.COURSES_UPDATE,
  payload,
});
