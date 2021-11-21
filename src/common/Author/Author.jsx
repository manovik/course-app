import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '../Button';

export const Author = ({
  authorName,
  children,
  className,
  dataTestId,
  dataAuthorId,
}) => {
  const initClass = 'd-flex justify-content-between ';
  const compClass = className ? initClass + className : initClass;

  return (
    <div
      className={compClass}
      data-testid={dataTestId}
      data-author-id={dataAuthorId}
    >
      <span>{authorName}</span>
      {children}
    </div>
  );
};

Author.propTypes = {
  dataAuthorId: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
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
