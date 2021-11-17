import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import { getUser } from 'store/selectors';
import { APP, ROLES } from 'appConstants';

export const AdminRoute = ({ children, ...props }) => {
  const user = useSelector(getUser);

  const getLocation = ({ location }) => {
    return user.role === ROLES.ADMIN ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: APP.COURSES,
          state: { from: location },
        }}
      />
    );
  };

  return <Route {...props} render={(a) => getLocation(a)} />;
};

AdminRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
