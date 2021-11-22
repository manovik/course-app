import React from 'react';

import { GridTitle } from 'common/GridTitle';
import { Button } from 'common/Button';
import { Author } from 'common/Author';

import { PropTypes } from 'prop-types';
import { testIds } from 'testUtils';

export const Authors = ({ authors, clickHandler }) => {
  return (
    <>
      <GridTitle title='Authors list' />
      <div
        className='mx-auto w-75'
        data-testid={testIds.AUTHORS_TO_ADD_CONTAINER}
      >
        {authors.length ? (
          authors.map((author) => (
            <Author
              key={author.id}
              authorName={author.name}
              className='m-2'
              dataTestId={testIds.AUTHOR_TO_ADD_ITEM}
              dataAuthorId={author.id}
            >
              <Button
                buttonText='Add author'
                btnClassName='btn-outline-primary fs-5'
                onClick={() => clickHandler(author)}
                dataTestId={testIds.ADD_AUTHOR_BTN}
              />
            </Author>
          ))
        ) : (
          <span>No authors</span>
        )}
      </div>
    </>
  );
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  clickHandler: PropTypes.func.isRequired,
};
