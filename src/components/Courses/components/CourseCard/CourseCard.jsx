import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from 'common/Button';
import { Record } from 'common/Record';

import { convertMinutesToTime, convertDate } from 'helpers';

import { APP, ROLES } from 'appConstants';

import { deleteCourse } from 'store/courses/thunk';

import { useAuth } from 'context/authContext';

import './course-card.scss';

export const CourseCard = ({ course }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, title, description, creationDate, duration, authors } = course;
  const authorsString = authors.join(', ');
  const { role } = useAuth();

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
          <div className='d-flex flex-wrap'>
            <Button
              buttonText='Show Course'
              btnClassName='btn-outline-primary btn-wide fs-5 m-1'
              onClick={() => history.push(`${APP.COURSES}/${id}`)}
            />
            {role === ROLES.ADMIN && (
              <>
                <Button
                  buttonText='edit'
                  btnClassName='btn-outline-warning btn--common m-1'
                  onClick={() => console.log('edit')}
                />
                <Button
                  buttonText='trash'
                  btnClassName='btn-outline-danger btn--common m-1'
                  onClick={() => dispatch(deleteCourse(id))}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
