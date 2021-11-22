import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Logo } from './components/Logo';
import { User } from './components/User';

import { Button } from 'common/Button';

import { APP } from 'appConstants';

import { useAuth } from 'context/authContext';

import { testIds } from 'testUtils';
import { getUser } from 'store/selectors';

import './header.scss';

export const Header = () => {
  const { signOut } = useAuth();
  const { name, isAuth, role } = useSelector(getUser);

  return (
    <header className='header shadow p-3 mb-5' data-testid={testIds.HEADER}>
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
                <User name={name || role} />
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
