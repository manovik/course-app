import { render, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { mockedAuthorsList } from 'mock/mockedAuthorsList';
import { Wrapper, testIds, state } from 'testUtils';
import { CourseForm } from '..';

describe('Testing CourseForm', () => {
  describe('Testing CourseForm', () => {
    it('should be equal to authors from store', () => {
      const store = {
        getState: () => state,
        subscribe: jest.fn(),
        dispatch: jest.fn(),
      };

      const { getAllByTestId } = render(
        <Wrapper store={store}>
          <CourseForm />
        </Wrapper>
      );

      expect(getAllByTestId(testIds.AUTHOR_ITEM)).toHaveLength(
        mockedAuthorsList.length
      );
    });

    it('should call dispatch on create new author', () => {
      const spyDispatch = jest.spyOn(reactRedux, 'useDispatch');

      const store = {
        getState: () => state,
        subscribe: jest.fn(),
        dispatch: jest.fn(),
      };

      const { getByTestId } = render(
        <Wrapper store={store}>
          <CourseForm />
        </Wrapper>
      );

      fireEvent.click(getByTestId(testIds.ADD_AUTHOR_BTN));

      expect(spyDispatch).toBeCalled();
    });
  });
});
