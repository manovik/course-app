import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'common/Button';

import { Logo } from './components/Logo';
import { User } from './components/User';

import './header.scss';

const Header = ({ isLoggedIn }) => {
  return (
    <header className='header shadow p-3 mb-5'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <div className='col'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          {isLoggedIn && (
            <>
              <div className='col-auto p-4'>
                <User name='Maxim' />
              </div>
              <div className='col-auto'>
                <Button
                  btnClassName='btn-outline-secondary btn-md fs-5 c-dark'
                  buttonText={'Logout'}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
