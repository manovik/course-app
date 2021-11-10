import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from 'selectors';
import { APP } from 'utils/appRoutes';

export const AdminRoute = ({ children, ...props }) => {
  const user = useSelector(getUser());
  return (
    <Route {...props}>
      {user.role === 'admin' ? children : <Redirect to={APP.COURSES} />}
    </Route>
  );
};
