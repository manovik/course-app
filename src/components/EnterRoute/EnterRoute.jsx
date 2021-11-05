import React from 'react';
import { useAuth } from 'context/authContext';
import { Route, Redirect } from 'react-router-dom';
import { APP } from 'utils/appRoutes';

export const EnterRoute = ({ children, ...props }) => {
  const auth = useAuth();
  return (
    <Route {...props}>
      {auth.user ? <Redirect to={APP.COURSES} /> : children}
    </Route>
  );
};
