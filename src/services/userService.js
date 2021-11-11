import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';

export class UserService {
  constructor(url) {
    this.baseUrl = url;
  }
  loginUser = async (data) =>
    await axios.post(`${this.baseUrl}/${ENDPOINTS.LOGIN}`, data);

  register = async (data) =>
    await axios.post(`${this.baseUrl}/${ENDPOINTS.REGISTER}`, data);

  getCurrentUser = async (token) =>
    await axios.get(`${this.baseUrl}/${ENDPOINTS.GET_ME}`, {
      headers: {
        Authorization: token,
      },
    });
}
