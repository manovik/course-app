import React from 'react';
import { PropTypes } from 'prop-types';

export const TextArea = ({
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

TextArea.propTypes = {
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholdetText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string.isRequired,
};
