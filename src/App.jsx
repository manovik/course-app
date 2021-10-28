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
import CreateCourse from 'components/CreateCourse/CreateCourse';

import { Loader } from 'common/Loader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <div className='wrapper'>
        <Header isLoggedIn={isLoggedIn} />
        {isLoading && <Loader />}
        <div className='content-wrapper'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/login' />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/registration'>
              <Registration />
            </Route>
            <Route exact path='/courses'>
              <Courses isLoadingHandler={false} />
            </Route>
            <Route exact path='/courses/add'>
              <CreateCourse setIsLoading={setIsLoading} />
            </Route>
            <Route exact path='/courses/:courseId'>
              <CourseInfo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
