import React from 'react';
import { PropTypes } from 'prop-types';

export const Input = ({
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
        autoComplete={type === 'password' ? 'new-password' : ''}
        placeholder={placeholdetText}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholdetText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  reference: PropTypes.object,
};
