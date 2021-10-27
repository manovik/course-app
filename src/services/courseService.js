import { v4 } from 'uuid';
import { AuthorService } from 'services';
import { mockedAuthorsList } from 'mock/mockedAuthorsList';

// imitation of some user service

class CourseService {
  constructor(courseService) {
    this.courseService = courseService;
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

  getMappedCoursesOnAuthors = () => {
    const authorService = new AuthorService(mockedAuthorsList);
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
