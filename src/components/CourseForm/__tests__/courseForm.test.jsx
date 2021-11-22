import { render, fireEvent } from '@testing-library/react';
import { within } from '@testing-library/dom';
import * as reactRedux from 'react-redux';
import { mockedAuthorsList } from 'mock/mockedAuthorsList';
import { Wrapper, testIds, state } from 'testUtils';
import { CourseForm } from '..';

describe('Testing CourseForm', () => {
  describe('Testing CourseForm', () => {
    let renderView;

    const store = {
      getState: () => state,
      subscribe: jest.fn(),
      dispatch: jest.fn(),
    };

    const getIdsArray = (container, authorsId) =>
      Array(...within(container).queryAllByTestId(authorsId)).map(
        (a) => a.dataset.authorId
      );

    beforeEach(() => {
      renderView = () =>
        render(
          <Wrapper store={store}>
            <CourseForm />
          </Wrapper>
        );
    });

    afterEach(() => {
      renderView = null;
    });

    it('should be equal to authors from store', () => {
      const { getAllByTestId } = renderView();

      expect(getAllByTestId(testIds.AUTHOR_TO_ADD_ITEM)).toHaveLength(
        mockedAuthorsList.length
      );
    });

    it('should call dispatch on create new author', () => {
      const spyDispatch = jest.spyOn(reactRedux, 'useDispatch');

      const { getByTestId } = renderView();

      fireEvent.click(getByTestId(testIds.CREATE_AUTHOR_BTN));

      expect(spyDispatch).toBeCalled();
    });

    it("should add an author to course authors list on 'Add author' button click.", () => {
      const { getAllByTestId, queryByTestId } = renderView();

      const authorsList = queryByTestId(testIds.AUTHORS_TO_ADD_CONTAINER);
      const addedAuthorsList = queryByTestId(testIds.ADDED_AUTHORS_CONTAINER);
      const firstAuthor = getAllByTestId(testIds.AUTHOR_TO_ADD_ITEM)[0];
      const firstAuthorAddBtn = within(firstAuthor).queryByTestId(
        testIds.ADD_AUTHOR_BTN
      );

      fireEvent.click(firstAuthorAddBtn);

      const notAddedAuthorsIds = getIdsArray(
        authorsList,
        testIds.AUTHOR_TO_ADD_ITEM
      );
      const addedAuthorsIds = getIdsArray(
        addedAuthorsList,
        testIds.AUTHOR_ADDED_ITEM
      );

      expect(notAddedAuthorsIds).not.toContain(firstAuthor.dataset.authorId);
      expect(addedAuthorsIds).toContain(firstAuthor.dataset.authorId);
    });

    it("should delete an author from added to course authors list on 'Delete author' button click.", () => {
      const { getAllByTestId, queryByTestId } = renderView();

      const authorsList = queryByTestId(testIds.AUTHORS_TO_ADD_CONTAINER);
      const addedAuthorsList = queryByTestId(testIds.ADDED_AUTHORS_CONTAINER);
      const firstAuthorToAdd = getAllByTestId(testIds.AUTHOR_TO_ADD_ITEM)[0];
      const firstAuthorToAddBtn = within(firstAuthorToAdd).queryByTestId(
        testIds.ADD_AUTHOR_BTN
      );

      fireEvent.click(firstAuthorToAddBtn);

      const firstAddedAuthor = getAllByTestId(testIds.AUTHOR_ADDED_ITEM)[0];
      const firstAddedAuthorBtn = within(firstAddedAuthor).queryByTestId(
        testIds.DELETE_AUTHOR_BTN
      );

      fireEvent.click(firstAddedAuthorBtn);

      const notAddedAuthorsIds = getIdsArray(
        authorsList,
        testIds.AUTHOR_TO_ADD_ITEM
      );
      const addedAuthorsIds = getIdsArray(
        addedAuthorsList,
        testIds.AUTHOR_ADDED_ITEM
      );

      expect(notAddedAuthorsIds).toContain(firstAuthorToAdd.dataset.authorId);
      expect(addedAuthorsIds).not.toContain(firstAuthorToAdd.dataset.authorId);
    });
  });
});
