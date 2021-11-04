import React from 'react';

import { PropTypes } from 'prop-types';

import { v4 } from 'uuid';

export const Input = ({
  htmlId,
  labelText,
  placeholderText,
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
        placeholder={placeholderText}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  reference: PropTypes.object,
};

Input.defaultProps = {
  htmlId: `${v4().slice(-4)}-input`,
  labelText: 'Input text',
  placeholderText: 'Enter text',
  className: '',
};
