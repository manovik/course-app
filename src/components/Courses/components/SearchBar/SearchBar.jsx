import React, { useState } from 'react';
import { Input } from 'common/Input';
import { Button } from 'common/Button';

const SearchBar = ({ searchHandler, clearInputHandler }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onClickHandler = () => searchHandler(inputValue);

  return (
    <form className='input-group w-50'>
      <Input
        className='form-control fs-4'
        htmlId='searchCourse'
        labelText=''
        placeholdetText='Enter Course name'
        onChange={onChangeHandler}
      />
      <Button
        buttonText='&#10005;'
        btnClassName='btn-outline-danger fs-4 fw-bold'
        onClick={clearInputHandler}
        type='reset'
      />
      <Button
        buttonText='Search'
        btnClassName='btn-outline-primary btn-wide fs-4'
        onClick={onClickHandler}
      />
    </form>
  );
};

export default SearchBar;
