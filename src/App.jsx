import React, { useState, useEffect } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { Courses } from 'components/Courses';
import { Header } from 'components/Header';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';
import { CourseInfo } from 'components/CourseInfo';
import { CourseForm } from 'components/CourseForm';
import { PrivateRoute } from 'components/PrivateRoute';

import { Loader } from 'common/Loader';
import { ErrorTip } from 'common/ErrorTip';

import { APP } from 'utils/appRoutes';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    let timerId;
    if (isError) {
      timerId = setTimeout(() => {
        setIsError(false);
      }, 6000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isError]);

  return (
    <div className='wrapper'>
      <Header />
      {isLoading && <Loader />}
      <div className='content-wrapper'>
        {isError && <ErrorTip errorMessages={errorMessages} />}
        <Switch>
          <Route exact path={APP.ROOT}>
            <Redirect to={APP.COURSES} />
          </Route>

          <Route path={APP.LOGIN}>
            <Login
              setIsError={setIsError}
              setIsLoading={setIsLoading}
              setErrorMessages={setErrorMessages}
            />
          </Route>
          <Route path={APP.REGISTRATION}>
            <Registration
              setIsLoading={setIsLoading}
              setIsError={setIsError}
              setErrorMessages={setErrorMessages}
            />
          </Route>

          <PrivateRoute exact path={APP.COURSES}>
            <Courses />
          </PrivateRoute>
          <PrivateRoute exact path={APP.COURSES_ADD}>
            <CourseForm setIsLoading={setIsLoading} />
          </PrivateRoute>
          <PrivateRoute exact path={APP.COURSES_ID}>
            <CourseInfo />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default App;
