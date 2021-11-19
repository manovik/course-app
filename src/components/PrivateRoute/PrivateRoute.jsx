import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { APP } from 'appConstants';
import { getUser } from 'store/selectors';

export const PrivateRoute = ({ children, ...props }) => {
  const { isAuth } = useSelector(getUser);
  return (
    <Route {...props}>{isAuth ? children : <Redirect to={APP.LOGIN} />}</Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
