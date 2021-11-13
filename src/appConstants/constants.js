export const baseUrl = 'http://localhost:3000';

export const ENDPOINTS = {
  LOGIN: 'login',
  REGISTER: 'register',
  COURSES: 'courses',
  GET_COURSES: 'courses/all',
  GET_AUTHORS: 'authors/all',
  GET_ME: 'users/me',
  ADD_COURSE: 'courses/add',
};

export const APP = {
  ROOT: '/',
  LOGIN: '/login',
  COURSES: '/courses',
  COURSES_ADD: '/courses/add',
  COURSES_ID: '/courses/:courseId',
  REGISTRATION: '/registration',
};

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};
