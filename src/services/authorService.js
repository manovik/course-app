import { v4 } from 'uuid';

class AuthorService {
  constructor(authorService) {
    this.authorService = authorService;
  }

  createNewAuthor = (name) => ({
    id: this.generatUUID(),
    name,
  });

  generatUUID = () => v4();

  add = (newAuthor) => {
    const author = this.createNewAuthor(newAuthor);
    this.authorService.push(author);
  };

  getAll = () => [...this.authorService];
}

export default AuthorService;
