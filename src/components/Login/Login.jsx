import React, { useRef, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Button } from 'common/Button';
import { Input } from 'common/Input';

import { courseAPI, ENDPOINTS } from 'services';

import { APP } from 'utils/appRoutes';

export const Login = ({
  setIsLoggedIn,
  setIsLoading,
  setIsError,
  setErrorMessages,
}) => {
  const history = useHistory();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('u-token')) {
      history.push(APP.COURSES);
      setIsLoggedIn(true);
    }
  }, [history, setIsLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    await courseAPI
      .post(`/${ENDPOINTS.LOGIN}`, {
        email: emailRef.current.value,
        password: passRef.current.value,
      })
      .then(({ data }) => {
        history.push(APP.COURSES);
        setIsLoading(false);
        setIsLoggedIn(true);
        console.log({ data });
        localStorage.setItem('u-token', data.result);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        if (err?.response?.data?.errors) {
          setErrorMessages(err?.response?.data?.errors);
          return;
        }
        setErrorMessages([
          'Invalid email or password. Please, check your credentials!',
        ]);
      })
      .finally(() => {
        setTimeout(() => {
          setIsError(false);
        }, 6000);
      });
  };

  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      <div className='login-signup'>
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
          <p className='mt-4 text-center'>
            If you don't have an account you can{' '}
            <Link to={APP.REGISTRATION}>Register it</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
