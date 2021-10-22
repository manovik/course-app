import React from 'react';
import { GridElementTemplate } from './components/GridElementTemplate';

const GridTemplate = ({ children }) => {
  return (
    <div className='row row-cols-2 mt-5 gy-4 gx-5'>
      {children.map((child, i) => (
        <GridElementTemplate key={i}>{child}</GridElementTemplate>
      ))}
    </div>
  );
};

export default GridTemplate;
