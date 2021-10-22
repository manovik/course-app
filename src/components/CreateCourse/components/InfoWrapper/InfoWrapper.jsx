import React, { useState, useEffect } from 'react';
import { AddAuthor } from '../AddAuthor';
import { Authors } from '../Authors';
import { Duration } from '../Duration';
import { CourseAuthors } from '../CourseAuthors';
import { GridTemplate } from '@common/GridTemplate';
import { mockedAuthorsList } from '@mock/mockedAuthorsList';
import { AuthorService } from '@services';

const authorService = new AuthorService(mockedAuthorsList);

const InfoWrapper = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
    setAuthors(authorService.getAll());
  }, []);

  const addAuthor = (author) => {
    authorService.add(author);
    setAuthors(authorService.getAll());
  };

  return (
    <GridTemplate>
      <AddAuthor clickHandler={addAuthor} />
      <Authors authors={authors} />
      <Duration />
      <CourseAuthors authors={selectedAuthors} />
    </GridTemplate>
  );
};

export default InfoWrapper;
