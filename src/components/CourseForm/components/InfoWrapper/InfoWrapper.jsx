import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { ACTIONS } from 'components/CourseForm/store/actions';

import { AddAuthor } from '../AddAuthor';
import { Authors } from '../Authors';
import { Duration } from '../Duration';
import { CourseAuthors } from '../CourseAuthors';

import { GridTemplate } from 'common/GridTemplate';

import { authorService } from 'services';
import { addAuthor } from 'store/authors/actionCreators';

import { getIDs, switchElementsInStates } from 'helpers';
import { getAuthors } from 'selectors';

export const InfoWrapper = ({ dispatch, store: courseLocalStore }) => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const history = useHistory();
  const historyState = history.location?.state;
  const authorsDispatch = useDispatch();
  const storeAuthors = useSelector(getAuthors);

  const getAvailableAuthors = async () => {
    if (historyState) {
      const available = storeAuthors.filter((a) => {
        return !historyState?.authors.includes(a.id);
      });
      setAuthors(available);
      return;
    }
    setAuthors(storeAuthors);
  };

  const getSelectedAuthors = () => {
    const mappedAuthors = authorService.getAuthorsByIds(
      historyState?.authors,
      storeAuthors
    );
    setSelectedAuthors(mappedAuthors);
  };

  const addNewAuthor = async (author) => {
    if (!author) return;
    try {
      const { successful, result: newAuthor } = await authorService.addAuthor(
        author
      );
      if (successful) {
        authorsDispatch(addAuthor(newAuthor));
        setAuthors((prevList) => [...prevList, newAuthor]);
      }
    } catch (err) {
      console.error(err);
    }
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
    if (historyState) {
      getSelectedAuthors();
    }
    getAvailableAuthors();
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
      <Duration
        dispatch={dispatch}
        value={historyState?.duration || courseLocalStore?.duration}
      />
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
