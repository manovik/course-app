import React, { useState, useEffect } from 'react';
import { AddAuthor } from '../AddAuthor';
import { Authors } from '../Authors';
import { Duration } from '../Duration';
import { CourseAuthors } from '../CourseAuthors';
import { GridTemplate } from '@common/GridTemplate';
import { mockedAuthorsList } from '@mock/mockedAuthorsList';
import { AuthorService } from '@services';

const authorService = new AuthorService(mockedAuthorsList);

const switchElementsInStates =
  (stateFrom, setStateFrom, stateTo, setStateTo) => (entity) => {
    const newList = [...stateTo];
    newList.push(entity);
    setStateTo(newList);

    const filteredList = stateFrom.filter((a) => a.id !== entity.id);
    setStateFrom(filteredList);
  };

const InfoWrapper = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
    setAuthors(authorService.getAll());
  }, []);

  const addNewAuthor = (author) => {
    if (!author) return;

    const newAuthor = authorService.createNewAuthor(author);
    authorService.addCompletedAuthor(newAuthor);

    const newList = [...authors, newAuthor];
    setAuthors(newList);
  };

  switchElementsInStates();

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
      <Duration />
      <CourseAuthors
        authors={selectedAuthors}
        clickHandler={removeAuthorFromCourse}
      />
    </GridTemplate>
  );
};

export default InfoWrapper;
