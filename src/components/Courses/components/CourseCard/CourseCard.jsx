import React from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from 'common/Button';
import { Record } from 'common/Record';

import { convertMinutesToTime, convertDate } from 'helpers';

import { APP } from 'utils/appRoutes';

import './course-card.scss';

const CourseCard = ({ course }) => {
  const history = useHistory();
  const { id, title, description, creationDate, duration, authors } = course;
  const authorsString = authors.join(', ');

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
            text={authorsString}
            title={authorsString}
          />
          <Record caption='Duration' text={convertMinutesToTime(duration)} />
          <Record caption='Created' text={convertDate(creationDate)} />
          <div className='d-flex justify-content-center'>
            <Button
              buttonText='Show Course'
              btnClassName='btn-outline-primary btn-wide fs-5'
              onClick={() => history.push(`${APP.COURSES}/${id}`)}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
