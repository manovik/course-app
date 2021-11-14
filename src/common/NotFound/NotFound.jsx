import React from 'react';

import { Link } from 'react-router-dom';

import { APP } from 'appConstants';

import { svg404 } from './svg404';

import './notFound.scss';

export const NotFound = () => {
  return (
    <section className='container'>
      <Link to={APP.COURSES} className='btn fs-3'>
        &#8592; Back to courses
      </Link>
      <div className='main'>{svg404}</div>
    </section>
  );
};
