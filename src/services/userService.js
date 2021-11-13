import axios from 'axios';
import { ENDPOINTS } from 'appConstants';

export class UserService {
  constructor(url) {
    this.baseUrl = url;
  }
  loginUser = async (data) =>
    await axios.post(`${this.baseUrl}/${ENDPOINTS.LOGIN}`, data);

  logOut = async (token) => {
    try {
      const { data } = await axios.delete(
        `${this.baseUrl}/${ENDPOINTS.LOGOUT}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  register = async (data) =>
    await axios.post(`${this.baseUrl}/${ENDPOINTS.REGISTER}`, data);

  getCurrentUser = async (token) =>
    await axios.get(`${this.baseUrl}/${ENDPOINTS.GET_ME}`, {
      headers: {
        Authorization: token,
      },
    });
}
