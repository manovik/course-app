import React from 'react';
import { GridElementTemplate } from './components/GridElementTemplate';
import { PropTypes } from 'prop-types';

export const GridTemplate = ({ children }) => {
  return (
    <div className='row row-cols-2 mt-5 gy-4 gx-5'>
      {children.map((child, i) => (
        <GridElementTemplate key={i}>{child}</GridElementTemplate>
      ))}
    </div>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
