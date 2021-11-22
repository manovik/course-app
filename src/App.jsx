import React, { useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import { getAppState, getUser } from 'store/selectors';
import { clearErrors, setAppIsLoaded } from 'store/appState/actionCreators';

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector(getAppState);
  const { isAuth } = useSelector(getUser);

  useEffect(() => {
    if (isAuth && appState.firstAppLoad) {
      dispatch(getAllAuthors());
      dispatch(getAllCourses());
      dispatch(setAppIsLoaded());
    }
  }, [dispatch, appState.firstAppLoad, isAuth]);

  useEffect(() => {
    let timerId;
    if (appState.errors.length) {
      timerId = setTimeout(() => {
        dispatch(clearErrors());
      }, 6000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [appState, dispatch]);

  return (
    <div className='wrapper'>
      <Header />
      {appState.isLoading && <Loader />}
      <div className='content-wrapper'>
        {!!appState.errors.length && (
          <ErrorTip errorMessages={appState.errors} />
        )}
        <Switch>
          <Route exact path={APP.ROOT}>
            <Redirect to={APP.COURSES} />
          </Route>

          <Route path={APP.LOGIN}>
            <Login />
          </Route>
          <Route path={APP.REGISTRATION}>
            <Registration />
          </Route>

          <PrivateRoute exact path={APP.COURSES}>
            <Courses />
          </PrivateRoute>
          <AdminRoute exact path={`${APP.COURSES_ADD}`}>
            <CourseForm />
          </AdminRoute>
          <AdminRoute exact path={`${APP.COURSE_UPDATE}/:course`}>
            <CourseForm />
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
