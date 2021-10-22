import React from 'react';
import { GridTitle } from '@common/GridTitle';
import { Button } from '@common/Button';
import { Author } from '@common/Author';

const Authors = ({ authors }) => {
  return (
    <>
      <GridTitle title='Authors list' />

      <div className='mx-auto w-75'>
        {authors.map((author) => (
          <Author key={author.id} authorName={author.name} className='m-2'>
            <Button
              buttonText='Add author'
              btnClassName='btn-outline-primary fs-5'
              onClick={console.log}
            />
          </Author>
        ))}
      </div>
    </>
  );
};

export default Authors;
