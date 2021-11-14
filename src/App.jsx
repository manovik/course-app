import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Courses } from 'components/Courses';
import { Header } from 'components/Header';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';
import { CourseInfo } from 'components/CourseInfo';
import { CourseForm } from 'components/CourseForm';
import { PrivateRoute } from 'components/PrivateRoute';
import { AdminRoute } from 'components/AdminRoute';

import { Loader } from 'common/Loader';
import { ErrorTip } from 'common/ErrorTip';

import { APP } from 'appConstants';
import { getAllAuthors } from 'store/authors/thunk';
import { getAllCourses } from 'store/courses/thunk';
import { NotFound } from 'common/NotFound';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAuthors());
    dispatch(getAllCourses());
  }, [dispatch]);

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
          <AdminRoute exact path={`${APP.COURSES_ADD}`}>
            <CourseForm setIsLoading={setIsLoading} />
          </AdminRoute>
          <AdminRoute exact path={`${APP.COURSE_UPDATE}/:course`}>
            <CourseForm setIsLoading={setIsLoading} />
          </AdminRoute>
          <PrivateRoute exact path={APP.COURSES_ID}>
            <CourseInfo />
          </PrivateRoute>
          <Route path='/*' component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
