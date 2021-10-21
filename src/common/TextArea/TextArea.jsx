import React from 'react';

const TextArea = ({
  htmlId,
  labelText,
  placeholdetText,
  onChange,
  className,
}) => {
  return (
    <>
      <label htmlFor={htmlId}>{labelText}</label>
      <textarea
        className={className}
        id={htmlId}
        placeholder={placeholdetText}
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default TextArea;
