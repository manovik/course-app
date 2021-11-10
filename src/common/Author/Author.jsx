import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '../Button';

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
  authorName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

Author.defaultProps = {
  authorName: 'No author',
  children: <Button />,
  className: '',
};
