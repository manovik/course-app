import React, { useState } from 'react';
import { Input } from '@common/Input';
import { Button } from '@common/Button';
import { GridTitle } from '@common/GridTitle';

const AddAuthor = ({ clickHandler }) => {
  const [inputVal, setInputVal] = useState('');

  const changeHandler = (e) => {
    const { value } = e.target;
    setInputVal(value);
  };
  return (
    <>
      <GridTitle title='Add author' />
      <Input
        htmlId={'addAuthor'}
        labelText={'Author name'}
        placeholdetText={'Enter author name…'}
        onChange={changeHandler}
        className={'input-form fs-5 mt-3'}
      />
      <Button
        buttonText={'Create author'}
        btnClassName={
          'btn-outline-primary col-sm-3 align-self-center fs-5 mt-3'
        }
        onClick={() => clickHandler(inputVal)}
      />
    </>
  );
};

export default AddAuthor;
