import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from 'common/Button';
import { Input } from 'common/Input';

import { APP } from 'appConstants';

import { useAuth } from 'context/authContext';

import { useAuthRedirect } from 'hooks/useAuthRedirect';

export const Registration = () => {
  const history = useHistory();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    })
      .then(({ data }) => {
        if (data.successful) {
          history.push(APP.LOGIN);
        } else {
          throw data.errors;
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useAuthRedirect();

  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      <div className='login-signup'>
        <h2 className='text-center fs-1'>Registration</h2>
        <form className='mt-5 fs-4' onSubmit={handleSubmit}>
          <Input
            htmlId={'name'}
            labelText={'Name'}
            placeholderText={'Enter name'}
            className={'form-control mt-3 mb-5 fs-4'}
            type={'text'}
            reference={nameRef}
            required={true}
          />
          <Input
            htmlId={'email'}
            labelText={'Email'}
            placeholderText={'Enter email'}
            className={'form-control mt-3 mb-5 fs-4'}
            type={'email'}
            reference={emailRef}
            required={true}
          />
          <Input
            htmlId={'password'}
            labelText={'Password'}
            placeholderText={'Enter password'}
            className={'form-control mt-3 fs-4'}
            type={'password'}
            reference={passRef}
            required={true}
          />
          <div className='d-flex justify-content-center mt-5'>
            <Button
              buttonText='Registration'
              btnClassName='btn-primary btn-wide fs-4'
              type='submit'
            />
          </div>
          <p className='mt-4 text-center'>
            If you have an account you can <Link to={APP.LOGIN}>Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
