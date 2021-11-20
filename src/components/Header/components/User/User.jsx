import React from 'react';
import './user.scss';
import { PropTypes } from 'prop-types';
import { testIds } from 'testUtils';

export const User = ({ name }) => {
  return (
    <div className='user' data-testid={testIds.USER_NAME}>
      {name}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
};

User.defaultProps = {
  name: 'John Doe',
};
