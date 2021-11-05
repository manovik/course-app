import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { ACTIONS } from 'components/CreateCourse/store/actions';

import { AddAuthor } from '../AddAuthor';
import { Authors } from '../Authors';
import { Duration } from '../Duration';
import { CourseAuthors } from '../CourseAuthors';

import { GridTemplate } from 'common/GridTemplate';

import { authorService } from 'services';

const getIDs = (entity) => entity.map((a) => a.id);

const switchElementsInStates =
  (stateFrom, setStateFrom, stateTo, setStateTo) => (entity) => {
    const newList = [...stateTo];
    newList.push(entity);
    setStateTo(newList);

    const filteredList = stateFrom.filter((a) => a.id !== entity.id);
    setStateFrom(filteredList);
  };

export const InfoWrapper = ({ dispatch }) => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
    setAuthors(authorService.getAll());
  }, []);

  useEffect(() => {
    const authorsIdArray = getIDs(selectedAuthors);
    dispatch({ type: ACTIONS.SET_AUTHORS, payload: authorsIdArray });
    return () => {
      dispatch({ type: ACTIONS.SET_AUTHORS, payload: [] });
    };
  }, [selectedAuthors, dispatch]);

  const addNewAuthor = (author) => {
    if (!author) return;

    const newAuthor = authorService.createNewAuthor(author);
    authorService.add(newAuthor);

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

InfoWrapper.defaultProps = {
  dispatch: () => console.log('Dispatch is not set'),
};
