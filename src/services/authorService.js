import { v4 } from 'uuid';

// imitation of some user service

class AuthorService {
  constructor(authorService) {
    this.authorService = authorService;
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

export default AuthorService;
