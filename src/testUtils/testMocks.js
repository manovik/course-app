import { mockedAuthorsList } from 'mock/mockedAuthorsList';
import { mockedCoursesList } from 'mock/mockedCoursesList';

export const state = {
  authors: mockedAuthorsList,
  courses: mockedCoursesList,
  user: {
    name: 'Alex',
    isAuth: true,
    role: 'admin',
  },
  app: {
    isLoading: false,
    errors: [],
    firstAppLoad: true,
  },
};
