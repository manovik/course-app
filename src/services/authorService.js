import axios from 'axios';

import { ENDPOINTS } from 'appConstants';

export class AuthorService {
  constructor(url) {
    this.baseUrl = url;
  }

  addAuthor = async (author) => {
    try {
      const { data } = await axios.post(
        `${this.baseUrl}/${ENDPOINTS.ADD_AUTHOR}`,
        { name: author },
        {
          headers: {
            Authorization: localStorage.getItem('u-token'),
          },
        }
      );
      return data;
    } catch (err) {
      throw new Error(`Failed to fetch authors list!\n${err}`);
    }
  };

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

  getAuthorsByIds = (authorsIdArray = [], allAuthors = []) => {
    try {
      const authors = [];
      for (const id of authorsIdArray) {
        authors.push(allAuthors.find((a) => a?.id === id)?.name || 'Unknown');
      }

      return authors;
    } catch (err) {
      console.error(err);
    }
  };
}
