import React from 'react';
import { PropTypes } from 'prop-types';

export const Author = ({ authorName, children, className }) => {
  const initClass = 'd-flex justify-content-between ';
  const compClass = className ? initClass + className : initClass;

  return (
    <div className={compClass}>
      <span>{authorName}</span>
      {children}
    </div>
  );
};

Author.propTypes = {
  authorName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};
