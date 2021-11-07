import { v4 } from 'uuid';
import { authorService } from 'services';
import { courseAPI } from './courseAPI';
import { ENDPOINTS } from './apiEndpoints';

class CourseService {
  constructor() {
    this.courseService = [];
    this.generateUUID = v4;
    this.authorService = authorService;
    this.authors = [];
  }

  createNewCourse = (courseInfo) => ({
    ...courseInfo,
    id: this.generateUUID(),
    creationDate: new Date().toLocaleDateString('en-US'),
  });

  add = async (newCourse) => {
    try {
      const { data } = await courseAPI.post(ENDPOINTS.ADD_COURSE, newCourse);
      const { successful } = data;
      return successful;
    } catch (err) {
      throw new Error('Failed to fetch courses!\n' + err);
    }
  };

  getAll = async () => {
    try {
      const { data } = await courseAPI.get(ENDPOINTS.GET_COURSES);
      const { successful, result } = data;
      if (successful) {
        this.courseService = result;
      }
      return this.courseService;
    } catch (err) {
      throw new Error('Failed to fetch courses');
    }
  };

  getAuthorsByIds = (authorsIdArray, allAuthors) => {
    const authors = [];
    for (const id of authorsIdArray) {
      authors.push(allAuthors.find((a) => a.id === id).name || 'Unknown');
    }

    return authors;
  };

  getMappedCoursesOnAuthors = (courses, allAuthors) => {
    if (courses?.length) {
      return courses.map((course) => {
        const authors = this.getAuthorsByIds(course.authors, allAuthors);

        return {
          ...course,
          authors,
        };
      });
    }
    return [];
  };
}

export const courseService = new CourseService();
