import React, { useState, useEffect } from 'react';
import { GridTitle } from '@common/GridTitle';
import { Author } from '@common/Author';
import { Button } from '@common/Button';

const CourseAuthors = ({ authors }) => {
  const [currentAuthors, setCurrentAuthors] = useState([]);
  useEffect(() => {
    setCurrentAuthors(authors);
    return () => {
      setCurrentAuthors([]);
    };
  }, [authors]);

  const getAuthors = (aut) => {
    return (
      <Author key={aut.id} authorName={aut.name} className='m-2'>
        <Button
          buttonText='Delete author'
          btnClassName='btn-outline-danger fs-5'
          onClick={console.log}
        />
      </Author>
    );
  };

  return (
    <>
      <GridTitle title='Course authors' />
      <div className='w-75 mx-auto'>{currentAuthors.map(getAuthors)}</div>
    </>
  );
};

export default CourseAuthors;
