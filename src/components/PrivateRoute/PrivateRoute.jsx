import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'context/authContext';
import { APP } from 'utils/appRoutes';

export const PrivateRoute = ({ children, ...props }) => {
  const auth = useAuth();
  return (
    <Route {...props}>
      {auth.isAuth ? children : <Redirect to={APP.LOGIN} />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
