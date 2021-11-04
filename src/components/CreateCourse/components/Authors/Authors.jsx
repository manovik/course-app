import React from 'react';

import { GridTitle } from 'common/GridTitle';
import { Button } from 'common/Button';
import { Author } from 'common/Author';

import { PropTypes } from 'prop-types';

export const Authors = ({ authors, clickHandler }) => {
  return (
    <>
      <GridTitle title='Authors list' />
      <div className='mx-auto w-75'>
        {authors.length ? (
          authors.map((author) => (
            <Author key={author.id} authorName={author.name} className='m-2'>
              <Button
                buttonText='Add author'
                btnClassName='btn-outline-primary fs-5'
                onClick={() => clickHandler(author)}
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

Authors.defaultProps = {
  authors: [{ id: '1', name: 'Unknown Author' }],
  clickHandler: () => console.log('ClickHandler is not set'),
};
