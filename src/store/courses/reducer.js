import { COURSES_ADD, COURSES_ADD_LIST, COURSES_GET } from './actionTypes';
// import { mockedCoursesList } from 'mock/mockedCoursesList';

export const coursesReducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case COURSES_ADD_LIST:
      return [...payload];
    case COURSES_ADD:
      return [...state, payload];
    case COURSES_GET:
      return state;
    default:
      return state;
  }
};
