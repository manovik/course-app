import { mockedCoursesList } from '@mock/mockedCoursesList';
import { mockedAuthorsList } from '@mock/mockedAuthorsList';
export const mapCoursesWithUsers = () =>
  mockedCoursesList.map((course) => {
    const authors = [];
    for (const id of course.authors) {
      const author =
        mockedAuthorsList.find((a) => a.id === id).name || 'Unknown';
      authors.push(author);
    }

    return {
      ...course,
      authors,
    };
  });
