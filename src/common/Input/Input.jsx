import React from 'react';

const Input = ({
  htmlId,
  labelText,
  placeholdetText,
  onChange,
  className,
  type,
  reference,
}) => {
  return (
    <>
      <label htmlFor={htmlId}>{labelText}</label>
      <input
        ref={reference}
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
