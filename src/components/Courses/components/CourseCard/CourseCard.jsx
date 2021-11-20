import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'common/Button';
import { Record } from 'common/Record';

import { convertMinutesToTime, convertDate, arrayToString } from 'helpers';
import { APP, ROLES } from 'appConstants';

import { deleteCourse } from 'store/courses/thunk';
import { getAuthors, getUser } from 'store/selectors';

import { coursesAPI } from 'services';

import './course-card.scss';
import { testIds } from 'testUtils';

export const CourseCard = ({ course }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [authorNames, setAuthorNames] = useState([]);

  const storeAuthors = useSelector(getAuthors);

  const { id, title, description, creationDate, duration, authors } = course;

  const { role } = useSelector(getUser);

  const mapAuthors = useCallback(() => {
    const mappedAuthors = coursesAPI.getAuthorsByIds(authors, storeAuthors);
    const namesArray = mappedAuthors.map((a) => a.name);
    return namesArray;
  }, [authors, storeAuthors]);

  useEffect(() => {
    setAuthorNames(mapAuthors());
  }, [setAuthorNames, mapAuthors]);

  return (
    <article className='card mb-3 shadow'>
      <div className='row card-body p-4'>
        <div className='col'>
          <h3 className='title' data-testid={testIds.COURSE_CARD.TITLE}>
            {title}
          </h3>
          <p
            className='fw-3 fs-4'
            data-testid={testIds.COURSE_CARD.DESCRIPTION}
          >
            {description}
          </p>
        </div>
        <div className='col-3 fs-4' style={{ paddingLeft: '1rem' }}>
          <Record
            caption='Authors'
            text={arrayToString(authorNames)}
            title={arrayToString(authorNames)}
            dataTestId={testIds.COURSE_CARD.AUTHORS}
          />
          <Record
            caption='Duration'
            text={convertMinutesToTime(duration)}
            dataTestId={testIds.COURSE_CARD.DURATION}
          />
          <Record
            caption='Created'
            text={convertDate(creationDate)}
            dataTestId={testIds.COURSE_CARD.CREATION_DATE}
          />
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
                  onClick={() =>
                    history.push(`${APP.COURSE_UPDATE}/${id}`, course)
                  }
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
