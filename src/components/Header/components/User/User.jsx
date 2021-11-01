import React from 'react';
import './user.scss';
import { PropTypes } from 'prop-types';

export const User = ({ name }) => {
  return <div className='user'>{name}</div>;
};

User.propTypes = {
  name: PropTypes.string.isRequired,
};
