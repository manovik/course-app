import Button from 'common/Button/Button';
import { Input } from 'common/Input';
import React, { useRef } from 'react';
import './login.scss';

export const Login = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ emailRef, passRef });
  };

  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      <div className='login'>
        <h2 className='text-center fs-1'>Login</h2>
        <form className='mt-5 fs-4' onSubmit={handleSubmit}>
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
              buttonText='Login'
              btnClassName='btn-primary btn-wide fs-4'
              onClick={handleSubmit}
              type='submit'
            />
          </div>
        </form>
      </div>
    </div>
  );
};
