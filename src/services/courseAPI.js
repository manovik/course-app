import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const courseAPI = {
  post: async (endpoint, data, config = {}) =>
    await axios.post(`${baseUrl}/${endpoint}`, data, config),
  get: async (endpoint, config) =>
    await axios.get(`${baseUrl}/${endpoint}`, config),
};
