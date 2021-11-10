import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from './components/Logo';
import { User } from './components/User';

import { Button } from 'common/Button';

import { APP } from 'utils/appRoutes';

import { useAuth } from 'context/authContext';

import './header.scss';

export const Header = () => {
  const { user, signOut, isAuth } = useAuth();

  return (
    <header className='header shadow p-3 mb-5'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <div className='col'>
            <Link to={APP.ROOT}>
              <Logo />
            </Link>
          </div>
          {isAuth && (
            <>
              <div className='col-auto p-4'>
                <User name={user} />
              </div>
              <div className='col-auto'>
                <Button
                  btnClassName='btn-outline-secondary btn-md fs-5 c-dark'
                  buttonText={'Logout'}
                  onClick={signOut}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
