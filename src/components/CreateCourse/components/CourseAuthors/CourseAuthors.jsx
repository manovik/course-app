import React from 'react';
import { GridTitle } from '@common/GridTitle';
import { Author } from '@common/Author';
import { Button } from '@common/Button';

const CourseAuthors = ({ authors, clickHandler }) => {
  const getAuthor = (aut) => {
    return (
      <Author key={aut.id} authorName={aut.name} className='m-2'>
        <Button
          buttonText='Delete author'
          btnClassName='btn-outline-danger fs-5'
          onClick={() => clickHandler(aut)}
        />
      </Author>
    );
  };

  const renderAuthors = () => {
    return authors.length ? (
      authors.map(getAuthor)
    ) : (
      <span>No selected authors</span>
    );
  };

  return (
    <>
      <GridTitle title='Course authors' />
      <div className='w-75 mx-auto'>{renderAuthors()}</div>
    </>
  );
};

export default CourseAuthors;
