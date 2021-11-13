import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import { getUser } from 'selectors';
import { APP, ROLES } from 'appConstants';

export const AdminRoute = ({ children, ...props }) => {
  const user = useSelector(getUser);

  return (
    <Route
      {...props}
      render={({ location }) =>
        user.role === ROLES.ADMIN ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: APP.COURSES,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

AdminRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
