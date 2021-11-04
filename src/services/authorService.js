import { v4 } from 'uuid';

import { mockedAuthorsList } from 'mock/mockedAuthorsList';

// imitation of some user service

export class AuthorService {
  constructor() {
    this.authorService = mockedAuthorsList;
    this.generateUUID = v4;
  }

  createNewAuthor = (name) => ({
    id: this.generateUUID(),
    name,
  });

  add = (author) => {
    this.authorService.push(author);
  };

  getAll = () => [...this.authorService];
}
