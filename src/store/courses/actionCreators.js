const { COURSES_ADD, COURSES_ADD_LIST, COURSES_GET } = require('./actionTypes');

export const addCourse = (payload) => ({ type: COURSES_ADD, payload });
export const addCourseList = (payload) => ({ type: COURSES_ADD_LIST, payload });
export const getCourses = () => ({ type: COURSES_GET });
