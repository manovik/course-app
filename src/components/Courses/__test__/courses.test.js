import { render, fireEvent } from '@testing-library/react';
import * as rrd from 'react-router-dom';
import { mockedAuthorsList } from 'mock/mockedAuthorsList';
import { Wrapper, testIds, state } from 'testUtils';
import { Courses } from '..';
import { APP } from 'appConstants';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

describe('Testing Courses', () => {
  describe('Testing Courses', () => {
    it('should render no courses', () => {
      const myState = {
        authors: mockedAuthorsList,
        courses: [],
        user: {
          name: 'Alex',
          isAuth: true,
          role: 'admin',
        },
        app: {
          isLoading: false,
          errors: [],
          firstAppLoad: true,
        },
      };

      const store = {
        getState: () => myState,
        subscribe: jest.fn(),
        dispatch: jest.fn(),
      };

      const { getByTestId } = render(
        <Wrapper store={store}>
          <Courses></Courses>
        </Wrapper>
      );

      expect(getByTestId(testIds.COURSE_WRAPPER)).toBeEmptyDOMElement();
    });

    it('should render exact quantity of courses from store', () => {
      const store = {
        getState: () => state,
        subscribe: jest.fn(),
        dispatch: jest.fn(),
      };

      const { getAllByRole } = render(
        <Wrapper store={store}>
          <Courses></Courses>
        </Wrapper>
      );

      expect(getAllByRole('article')).toHaveLength(2);
    });

    it('should be showed after a click on a button "Add new course"', () => {
      const pushMock = jest.fn();
      rrd.useHistory.mockReturnValue({
        push: pushMock,
      });

      const store = {
        getState: () => state,
        subscribe: jest.fn(),
        dispatch: jest.fn(),
      };

      const { getByTestId } = render(
        <Wrapper store={store}>
          <Courses />
        </Wrapper>
      );

      const addCourseBtn = getByTestId(testIds.ADD_BTN);
      fireEvent.click(addCourseBtn);
      const expectedRoute = `${APP.COURSES_ADD}`;
      expect(addCourseBtn).toBeInTheDocument();
      expect(pushMock).toHaveBeenCalledWith(expectedRoute);
    });
  });
});
