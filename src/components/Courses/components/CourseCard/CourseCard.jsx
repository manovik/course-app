import React from 'react';
import { Button } from '@common/Button';
import { Record } from '@common/Record';
import { convertMinutesToTime, convertDate } from '@helpers';
import './course-card.scss';

const cutLongString = (str) => {
  const maxLength = 25;
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
};

const CourseCard = ({ course }) => {
  const { title, description, creationDate, duration, authors } = course;
  return (
    <article className='card mb-3 shadow'>
      <div className='row card-body p-4'>
        <div className='col'>
          <h3 className='title'>{title}</h3>
          <p className='fw-3 fs-4'>{description}</p>
        </div>
        <div className='col-3 fs-4' style={{ paddingLeft: '1rem' }}>
          <Record
            caption='Authors'
            text={cutLongString(authors.join(', '))}
            title={authors.join(', ')}
          />
          <Record caption='Duration' text={convertMinutesToTime(duration)} />
          <Record caption='Created' text={convertDate(creationDate)} />
          <div className='d-flex justify-content-center'>
            <Button
              buttonText='Show Course'
              btnClassName='btn-outline-primary btn-wide fs-5'
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
