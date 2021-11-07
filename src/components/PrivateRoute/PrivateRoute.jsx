import React from 'react';
import { useAuth } from 'context/authContext';
import { Route, Redirect } from 'react-router-dom';
import { APP } from 'utils/appRoutes';

export const PrivateRoute = ({ children, ...props }) => {
  const auth = useAuth();
  return (
    <Route {...props}>
      {auth.isAuth ? children : <Redirect to={APP.LOGIN} />}
    </Route>
  );
};
