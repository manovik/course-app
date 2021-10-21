import React from 'react';

const Author = ({ authorName, children, className }) => {
  const initClass = 'd-flex justify-content-between ';
  const compClass = className ? initClass + className : initClass;

  return (
    <div className={compClass}>
      <span>{authorName}</span>
      {children}
    </div>
  );
};

export default Author;
