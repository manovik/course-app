import axios from 'axios';

import { ENDPOINTS } from 'appConstants';
import { makeShortId } from 'helpers/makeShortId';
export class CourseService {
  constructor(url) {
    this.courseService = [];
    this.baseUrl = url;
  }

  createNewCourse = (courseInfo) => ({
    ...courseInfo,
    creationDate: new Date().toLocaleDateString('en-US'),
  });

  add = async (newCourse) => {
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
      throw new Error('Failed to fetch courses!\n' + err);
    }
  };

  delete = async (id) => {
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

  getAll = async () => {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}/${ENDPOINTS.GET_COURSES}`
      );
      const { successful, result } = data;
      if (successful) {
        this.courseService = result;
      }
      return this.courseService;
    } catch (err) {
      throw new Error('Failed to fetch courses');
    }
  };

  getById = async (id) => {
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
