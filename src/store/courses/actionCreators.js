import * as actions from './actionTypes';

export const addCourse = (payload) => ({ type: actions.COURSES_ADD, payload });

export const removeCourse = (payload) => ({
  type: actions.COURSES_REMOVE,
  payload,
});

export const addCourseList = (payload) => ({
  type: actions.COURSES_ADD_LIST,
  payload,
});

export const getCourses = () => ({ type: actions.COURSES_GET });
