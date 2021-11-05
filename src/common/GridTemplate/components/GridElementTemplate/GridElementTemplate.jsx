import React from 'react';
import { PropTypes } from 'prop-types';

export const GridElementTemplate = ({ children }) => {
  return <div className='d-flex flex-column pb-3'>{children}</div>;
};

GridElementTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

GridElementTemplate.defaultProps = {
  children: (
    <div class='spinner-grow text-secondary border' role='status'>
      <span class='visually-hidden'>Loading...</span>
    </div>
  ),
};
