import React, { useState } from 'react';

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

import { Loader } from 'common/Loader';
import { ErrorTip } from 'common/ErrorTip';

import { APP } from 'utils/appRoutes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const [user, setUser] = useState('');

  return (
    <Router>
      <div className='wrapper'>
        <Header
          isLoggedIn={isLoggedIn}
          userName={user}
          setIsLoggedIn={setIsLoggedIn}
        />
        {isLoading && <Loader />}
        <div className='content-wrapper'>
          {isError && <ErrorTip errorMessages={errorMessages} />}
          <Switch>
            <Route exact path={APP.ROOT}>
              <Redirect to={APP.LOGIN} />
            </Route>
            <Route path={APP.LOGIN}>
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setIsError={setIsError}
                setIsLoading={setIsLoading}
                setErrorMessages={setErrorMessages}
                setUser={setUser}
              />
            </Route>
            <Route path={APP.REGISTRATION}>
              <Registration
                isLoggedIn={isLoggedIn}
                setIsLoading={setIsLoading}
                setIsError={setIsError}
                setErrorMessages={setErrorMessages}
              />
            </Route>
            <Route exact path={APP.COURSES}>
              <Courses isLoggedIn={isLoggedIn} />
            </Route>
            <Route exact path={APP.COURSES_ADD}>
              <CreateCourse
                isLoggedIn={isLoggedIn}
                setIsLoading={setIsLoading}
              />
            </Route>
            <Route exact path={`${APP.COURSES_ID}`}>
              <CourseInfo isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
