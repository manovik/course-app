import * as actions from './actionTypes';

export const coursesReducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case actions.COURSES_ADD:
      return [...state, ...payload];
    case actions.COURSES_REMOVE:
      const courses = state.filter((c) => c.id !== payload);
      return courses;
    case actions.COURSES_UPDATE:
      const { id } = payload;
      const coursesList = state.filter((c) => c.id !== id);
      return [payload, ...coursesList];
    default:
      return state;
  }
};
