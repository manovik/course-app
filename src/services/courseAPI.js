import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const courseAPI = {
  post: async (endpoint, data) =>
    await axios.post(`${baseUrl}/${endpoint}`, data),
  get: async (endpoint) => {
    const a = await axios.get(`${baseUrl}/${endpoint}`);
    return a;
  },
};
