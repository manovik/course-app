import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { ACTIONS } from 'components/CreateCourse/store/actions';

import { AddAuthor } from '../AddAuthor';
import { Authors } from '../Authors';
import { Duration } from '../Duration';
import { CourseAuthors } from '../CourseAuthors';

import { GridTemplate } from 'common/GridTemplate';

import { authorService } from 'services';
import { addAuthor } from 'store/authors/actionCreators';

import { getIDs, switchElementsInStates } from 'helpers';

export const InfoWrapper = ({ dispatch }) => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const authorsDispatch = useDispatch();

  const getAuthors = async () => {
    await authorService.getAll().then((a) => {
      setAuthors(a);
    });
  };

  const addNewAuthor = (author) => {
    if (!author) return;

    const newAuthor = authorService.createNewAuthor(author);
    // TODO: author service add new author
    authorsDispatch(addAuthor(newAuthor));
    setAuthors((prevList) => [...prevList, newAuthor]);
  };

  const addAuthorToCourse = switchElementsInStates(
    authors,
    setAuthors,
    selectedAuthors,
    setSelectedAuthors
  );

  const removeAuthorFromCourse = switchElementsInStates(
    selectedAuthors,
    setSelectedAuthors,
    authors,
    setAuthors
  );

  useEffect(() => {
    getAuthors();
  }, []);

  useEffect(() => {
    const authorsIdArray = getIDs(selectedAuthors);
    dispatch({ type: ACTIONS.SET_AUTHORS, payload: authorsIdArray });
    return () => {
      dispatch({ type: ACTIONS.SET_AUTHORS, payload: [] });
    };
  }, [selectedAuthors, dispatch]);

  return (
    <GridTemplate>
      <AddAuthor clickHandler={addNewAuthor} />
      <Authors authors={authors} clickHandler={addAuthorToCourse} />
      <Duration dispatch={dispatch} />
      <CourseAuthors
        authors={selectedAuthors}
        clickHandler={removeAuthorFromCourse}
      />
    </GridTemplate>
  );
};

InfoWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
