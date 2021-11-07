import React from 'react';
import { GridTitle } from 'common/GridTitle';
import { Author } from 'common/Author';
import { Button } from 'common/Button';

import { PropTypes } from 'prop-types';

export const CourseAuthors = ({ authors, clickHandler }) => {
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

CourseAuthors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

CourseAuthors.defaultProps = {
  authors: [{ id: '1', name: 'Unknown Author' }],
  clickHandler: () => console.warn('ClickHandler is not set'),
};
