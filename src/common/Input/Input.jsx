import React from 'react';

import { PropTypes } from 'prop-types';

export const Input = ({
  htmlId,
  labelText,
  placeholderText,
  onChange,
  className,
  type,
  reference,
  value,
  required,
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
        value={value}
        required={required}
      />
    </>
  );
};

Input.propTypes = {
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  reference: PropTypes.object,
  required: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => undefined,
  type: 'text',
  reference: null,
  required: false,
};
