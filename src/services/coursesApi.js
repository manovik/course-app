import axios from 'axios';

import { ENDPOINTS } from 'appConstants';
import { makeShortId } from 'helpers/makeShortId';

export class CoursesAPI {
  constructor(url) {
    this.baseUrl = url;
  }

  // authors

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

  getAllAuthors = async () => {
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
        authors.push(
          allAuthors.find((a) => a?.id === id) || { id, name: 'Unknown' }
        );
      }

      return authors;
    } catch (err) {
      console.error(err);
    }
  };

  // courses

  createNewCourse = (courseInfo) => ({
    ...courseInfo,
    duration: +courseInfo.duration,
    creationDate: new Date().toLocaleDateString('en-US'),
  });

  addCourse = async (newCourse) => {
    const courseInfo = this.createNewCourse(newCourse);
    try {
      const { data } = await axios.post(
        `${this.baseUrl}/${ENDPOINTS.ADD_COURSE}`,
        courseInfo,
        {
          headers: {
            Authorization: localStorage.getItem('u-token'),
          },
        }
      );
      return data;
    } catch (err) {
      throw new Error('Failed to add new course!\n' + err);
    }
  };

  deleteCourse = async (id) => {
    try {
      const { data } = await axios.delete(
        `${this.baseUrl}/${ENDPOINTS.COURSES}/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem('u-token'),
          },
        }
      );
      return data;
    } catch (err) {
      throw new Error(`Failed to delete course id: ${makeShortId(id)} .`);
    }
  };

  updateCourse = async (courseInfo) => {
    try {
      const { id, duration } = courseInfo;
      const { data } = await axios.put(
        `${this.baseUrl}/${ENDPOINTS.COURSES}/${id}`,
        { ...courseInfo, duration: +duration },
        {
          headers: {
            Authorization: localStorage.getItem('u-token'),
          },
        }
      );
      return data;
    } catch (err) {
      throw new Error('Failed to update course!\n' + err);
    }
  };

  getAllCourses = async () => {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}/${ENDPOINTS.GET_COURSES}`
      );
      const { successful, result } = data;
      if (successful) {
        return result;
      }
    } catch (err) {
      throw new Error('Failed to fetch courses!');
    }
  };

  getCourseById = async (id) => {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}/${ENDPOINTS.COURSES}/${id}`
      );

      const { successful, result } = data;
      if (successful) {
        return result;
      }
    } catch (err) {
      throw new Error(`Failed to fetch course by id ${makeShortId(id)}`);
    }
  };

  // user

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

  getCurrentUser = async (token) => {
    try {
      const data = await axios.get(`${this.baseUrl}/${ENDPOINTS.GET_ME}`, {
        headers: {
          Authorization: token,
        },
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}
