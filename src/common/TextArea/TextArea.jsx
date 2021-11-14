import React from 'react';

import { PropTypes } from 'prop-types';

export const TextArea = ({
  htmlId,
  labelText,
  placeholderText,
  onChange,
  className,
  value,
}) => {
  return (
    <>
      <label htmlFor={htmlId}>{labelText}</label>
      <textarea
        className={className}
        id={htmlId}
        placeholder={placeholderText}
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  );
};

TextArea.propTypes = {
  htmlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  onChange: () => undefined,
};
