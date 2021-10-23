import React, { useState, useRef } from 'react';
import { Input } from '@common/Input';
import { Button } from '@common/Button';
import { GridTitle } from '@common/GridTitle';

const AddAuthor = ({ clickHandler }) => {
  const inputRef = useRef(null);

  const clickBtnHandler = () => {
    clickHandler(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <>
      <GridTitle title='Add author' />
      <Input
        reference={inputRef}
        htmlId={'addAuthor'}
        labelText={'Author name'}
        placeholdetText={'Enter author name…'}
        className={'input-form fs-5 mt-3'}
      />
      <Button
        buttonText={'Create author'}
        btnClassName={
          'btn-outline-primary col-sm-3 align-self-center fs-5 mt-3'
        }
        onClick={clickBtnHandler}
      />
    </>
  );
};

export default AddAuthor;
