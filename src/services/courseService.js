import { v4 } from 'uuid';
import { AuthorService } from 'services';
import { mockedCoursesList } from 'mock/mockedCoursesList';

// imitation of some user service

class CourseService {
  constructor() {
    this.courseService = mockedCoursesList;
    this.generateUUID = v4;
  }

  createNewCourse = (courseInfo) => ({
    ...courseInfo,
    id: this.generateUUID(),
    creationDate: new Date().toLocaleDateString('en-US'),
  });

  add = (newCourse) => {
    this.courseService.push(newCourse);
  };

  getAll = () => [...this.courseService];

  getById = (id) => this.courseService.find((c) => c.id === id);

  getMappedCoursesOnAuthors = () => {
    const authorService = new AuthorService();
    const authorsList = authorService.getAll();
    return this.courseService.map((course) => {
      const authors = [];
      for (const id of course.authors) {
        const author =
          authorsList.find((a) => {
            return a.id === id;
          }).name || 'Unknown';
        authors.push(author);
      }

      return {
        ...course,
        authors,
      };
    });
  };
}

export default CourseService;
