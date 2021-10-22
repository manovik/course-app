import React from 'react';
import { GridTitle } from '@common/GridTitle';
import { Button } from '@common/Button';
import { Author } from '@common/Author';

const Authors = ({ authors, clickHandler }) => {
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

export default Authors;
