import * as actions from './actionTypes';

export const addAuthor = (payload) => ({ type: actions.AUTHORS_ADD, payload });

export const addAuthors = (payload) => ({
  type: actions.AUTHORS_ADD_LIST,
  payload,
});
