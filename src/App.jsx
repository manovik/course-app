import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Courses } from 'components/Courses';
import { Header } from 'components/Header';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';
import { CourseInfo } from 'components/CourseInfo';
import { CreateCourse } from 'components/CreateCourse';
import { PrivateRoute } from 'components/PrivateRoute';
import { EnterRoute } from 'components/EnterRoute';

import { Loader } from 'common/Loader';
import { ErrorTip } from 'common/ErrorTip';

import { APP } from 'utils/appRoutes';

import { ProvideAuth } from './context/authContext';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    localStorage.getItem('u-token') && <Redirect to={APP.COURSES} />;
  }, []);

  return (
    <ProvideAuth>
      <Router>
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
                <Redirect to={APP.LOGIN} />
              </Route>
              <EnterRoute path={APP.LOGIN}>
                <Login
                  setIsError={setIsError}
                  setIsLoading={setIsLoading}
                  setErrorMessages={setErrorMessages}
                />
              </EnterRoute>
              <EnterRoute path={APP.REGISTRATION}>
                <Registration
                  setIsLoading={setIsLoading}
                  setIsError={setIsError}
                  setErrorMessages={setErrorMessages}
                />
              </EnterRoute>
            </Switch>
          </div>
        </div>
      </Router>
    </ProvideAuth>
  );
};

export default App;
