import React, { useState } from 'react';
import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useHistory,
  Redirect,
} from 'react-router-dom';
// import { Loader } from './components/Loader';

function App() {
  // let history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
      <div className='wrapper'>
        <Header isLoggedIn={isLoggedIn} />
        <div className='content-wrapper'>
          {/* {isLoading ? <Loader /> : <Courses isLoadingHandler={setIsLoading} />} */}
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
            <Route path='/courses'>
              <Courses isLoadingHandler={false} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
