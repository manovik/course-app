import React from 'react';

const Input = ({
  htmlId,
  labelText,
  placeholdetText,
  onChange,
  className,
  type,
}) => {
  return (
    <>
      <label htmlFor={htmlId}>{labelText}</label>
      <input
        className={className}
        type={type ? type : 'text'}
        id={htmlId}
        placeholder={placeholdetText}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
