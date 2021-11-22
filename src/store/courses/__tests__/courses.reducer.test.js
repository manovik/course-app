import { coursesReducer } from '../reducer';
import { state } from 'testUtils';
import { addCoursesToStore, getCourses } from '../actionCreators';
import { mockedCoursesList } from 'mock/mockedCoursesList';

describe('Testing courses reducer', () => {
  it('should return the initial state', () => {
    const newState = coursesReducer(state.courses, {});
    expect(newState).toEqual(mockedCoursesList);
  });

  it('should handle COURSES_ADD and return new state', () => {
    const courseToAdd = {
      id: '1',
      title: 'Title',
      description: 'Lorem Ipsum',
      creationDate: '01/12/2021',
      duration: 120,
      authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f'],
    };

    const newState = coursesReducer(
      state.courses,
      addCoursesToStore([courseToAdd])
    );

    expect(newState).toEqual([...mockedCoursesList, courseToAdd]);
  });

  it('should handle COURSES_GET and return new state', () => {
    const newState = coursesReducer(state.courses, getCourses());
    expect(newState === mockedCoursesList).toBeFalsy();
  });
});
