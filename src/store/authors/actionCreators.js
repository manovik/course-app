const { AUTHORS_ADD } = require('./actionTypes');

export const addAuthor = (payload) => ({ type: AUTHORS_ADD, payload });
