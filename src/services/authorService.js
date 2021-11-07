import { v4 } from 'uuid';

import { courseAPI, ENDPOINTS } from 'services';

// imitation of some user service

class AuthorService {
  constructor() {
    this.authorService = [];
    this.generateUUID = v4;
  }

  createNewAuthor = (name) => ({
    id: this.generateUUID(),
    name,
  });

  add = (author) => {
    this.authorService.push(author);
  };

  getAll = async () => {
    await courseAPI
      .get(ENDPOINTS.GET_AUTHORS)
      .then(({ data }) => {
        const { result } = data;
        this.authorService = result;
      })
      .catch((err) => {
        throw new Error(`Failed to fetch authors list!\n${err}`);
      });
    return [...this.authorService];
  };
}

export const authorService = new AuthorService();
