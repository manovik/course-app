import { v4 } from 'uuid';

// imitation of some user service

class AuthorService {
  constructor(authorService) {
    this.authorService = authorService;
  }

  createNewAuthor = (name) => ({
    id: this.generatUUID(),
    name,
  });

  generatUUID = () => v4();

  add = (author) => {
    this.authorService.push(author);
  };

  getAll = () => [...this.authorService];
}

export default AuthorService;
