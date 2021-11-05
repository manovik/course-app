import React from 'react';
import { PropTypes } from 'prop-types';

export const GridTitle = ({ title, className }) => {
  const initClass = 'fs-2 mt-3 align-self-center ';
  const compClass = className ? initClass + className : initClass;

  return <h4 className={compClass}>{title}</h4>;
};

GridTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

GridTitle.defaultProps = {
  title: '',
};
