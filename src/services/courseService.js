import { v4 } from 'uuid';
import { authorService } from 'services';
import { mockedCoursesList } from 'mock/mockedCoursesList';

// imitation of some user service

class CourseService {
  constructor() {
    this.courseService = mockedCoursesList;
    this.generateUUID = v4;
    this.authorService = authorService;
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

  getAuthorsByIds = (authorsIdArray) => {
    const authorsList = this.authorService.getAll();
    const authors = [];

    for (const id of authorsIdArray) {
      const author =
        authorsList.find((a) => {
          return a.id === id;
        })?.name || 'Unknown';
      authors.push(author);
    }

    return authors;
  };

  getMappedCoursesOnAuthors = () => {
    return this.courseService.map((course) => {
      const authors = this.getAuthorsByIds(course.authors);
      return {
        ...course,
        authors,
      };
    });
  };
}

export const courseService = new CourseService();
