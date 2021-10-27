import React, { useRef } from 'react';

import { Link } from 'react-router-dom';

import Button from 'common/Button/Button';
import { Input } from 'common/Input';

export const Registration = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ emailRef, passRef });
  };

  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      <div className='login-signup'>
        <h2 className='text-center fs-1'>Registration</h2>
        <form className='mt-5 fs-4' onSubmit={handleSubmit}>
          <Input
            htmlId={'name'}
            labelText={'Name'}
            placeholdetText={'Enter name'}
            className={'form-control mt-3 mb-5 fs-4'}
            type={'text'}
            reference={nameRef}
          />
          <Input
            htmlId={'email'}
            labelText={'Email'}
            placeholdetText={'Enter email'}
            className={'form-control mt-3 mb-5 fs-4'}
            type={'email'}
            reference={emailRef}
          />
          <Input
            htmlId={'password'}
            labelText={'Password'}
            placeholdetText={'Enter password'}
            className={'form-control mt-3 fs-4'}
            type={'password'}
            reference={passRef}
          />
          <div className='d-flex justify-content-center mt-5'>
            <Button
              buttonText='Registration'
              btnClassName='btn-primary btn-wide fs-4'
              onClick={handleSubmit}
              type='submit'
            />
          </div>
          <p className='mt-4 text-center'>
            If you have an account you can <Link to={'/login'}>Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
