import React from 'react';

import { PropTypes } from 'prop-types';

import { v4 } from 'uuid';

export const TextArea = ({
  htmlId,
  labelText,
  placeholderText,
  onChange,
  className,
}) => {
  return (
    <>
      <label htmlFor={htmlId}>{labelText}</label>
      <textarea
        className={className}
        id={htmlId}
        placeholder={placeholderText}
        onChange={onChange}
      ></textarea>
    </>
  );
};

TextArea.propTypes = {
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
  htmlId: `${v4().slice(-4)}-text`,
  labelText: 'Input text',
  placeholderText: 'Enter text',
  className: '',
};
