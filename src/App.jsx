import React, { useState, useEffect } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { Courses } from 'components/Courses';
import { Header } from 'components/Header';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';
import { CourseInfo } from 'components/CourseInfo';
import { CreateCourse } from 'components/CreateCourse';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

import { Loader } from 'common/Loader';
import { ErrorTip } from 'common/ErrorTip';

import { APP } from 'utils/appRoutes';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 6000);
  }, [isError]);

  useEffect(() => {
    localStorage.getItem('u-token') && <Redirect to={APP.COURSES} />;
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      {isLoading && <Loader />}
      <div className='content-wrapper'>
        {isError && <ErrorTip errorMessages={errorMessages} />}
        <Switch>
          <PrivateRoute exact path={APP.COURSES}>
            <Courses />
          </PrivateRoute>
          <PrivateRoute exact path={APP.COURSES_ADD}>
            <CreateCourse setIsLoading={setIsLoading} />
          </PrivateRoute>
          <PrivateRoute exact path={APP.COURSES_ID}>
            <CourseInfo />
          </PrivateRoute>

          <Route exact path={APP.ROOT}>
            <Redirect to={APP.COURSES} />
          </Route>
          <PublicRoute path={APP.LOGIN}>
            <Login
              setIsError={setIsError}
              setIsLoading={setIsLoading}
              setErrorMessages={setErrorMessages}
            />
          </PublicRoute>
          <PublicRoute path={APP.REGISTRATION}>
            <Registration
              setIsLoading={setIsLoading}
              setIsError={setIsError}
              setErrorMessages={setErrorMessages}
            />
          </PublicRoute>
        </Switch>
      </div>
    </div>
  );
};

export default App;
