import React from 'react';
import { AddAuthor } from '../AddAuthor';
import { Authors } from '../Authors';
import { Duration } from '../Duration';
import { CourseAuthors } from '../CourseAuthors';
import { GridTemplate } from '@common/GridTemplate';
import { mockedAuthorsList } from '@mock/mockedAuthorsList';

const InfoWrapper = () => {
  return (
    <GridTemplate>
      <AddAuthor />
      <Authors />
      <Duration />
      <CourseAuthors authors={mockedAuthorsList} />
    </GridTemplate>
  );
};

export default InfoWrapper;
