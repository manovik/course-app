import axios from 'axios';
import { v4 } from 'uuid';

import { ENDPOINTS } from 'appConstants';

export class AuthorService {
  constructor(url) {
    this.generateUUID = v4;
    this.baseUrl = url;
  }

  createNewAuthor = (name) => ({
    id: this.generateUUID(),
    name,
  });

  getAll = async () => {
    return await axios
      .get(`${this.baseUrl}/${ENDPOINTS.GET_AUTHORS}`)
      .then(({ data }) => {
        const { result } = data;
        return result;
      })
      .catch((err) => {
        throw new Error(`Failed to fetch authors list!\n${err}`);
      });
  };
}
