import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Button } from 'common/Button';

import { Logo } from './components/Logo';
import { User } from './components/User';

import { APP } from 'utils/appRoutes';

import './header.scss';

import { PropTypes } from 'prop-types';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('u-token');
    setIsLoggedIn(false);
    history.push(APP.LOGIN);
  };

  return (
    <header className='header shadow p-3 mb-5'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <div className='col'>
            <Link to={APP.ROOT}>
              <Logo />
            </Link>
          </div>
          {isLoggedIn && (
            <>
              <div className='col-auto p-4'>
                <User name={userName} />
              </div>
              <div className='col-auto'>
                <Button
                  btnClassName='btn-outline-secondary btn-md fs-5 c-dark'
                  buttonText={'Logout'}
                  onClick={handleLogout}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isLoggedIn: false,
  setIsLoggedIn: () => console.log('SetIsLoggedIn is not set'),
  userName: 'Super User',
};
