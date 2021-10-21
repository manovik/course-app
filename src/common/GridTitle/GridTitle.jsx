import React from 'react';

const GridTitle = ({ title, className }) => {
  const initClass = 'fs-2 mt-3 align-self-center ';
  const compClass = className ? initClass + className : initClass;

  return <h4 className={compClass}>{title}</h4>;
};

export default GridTitle;
