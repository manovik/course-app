import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams, Link } from 'react-router-dom';

import { Record } from 'common/Record';

import { CourseService } from 'services';

import { convertMinutesToTime, convertDate } from 'helpers';

import { initCourseInfo } from 'utils/courseStructure';

import { APP } from 'utils/appRoutes';

import { useCheckIfUserLoggedIn } from 'hooks';

const courseService = new CourseService();

export const CourseInfo = ({ isLoggedIn }) => {
  useCheckIfUserLoggedIn(isLoggedIn);

  const [courseInfo, setCourseInfo] = useState(initCourseInfo);

  const { courseId } = useParams();

  useEffect(() => {
    setCourseInfo(courseService.getById(courseId));
  }, [courseId]);

  return (
    <div className='container'>
      <article className='fs-4'>
        <Link to={APP.COURSES} className='btn fs-3'>
          &#8592; Back to courses
        </Link>
        <h2 className='text-center mb-5 fs-1'>{courseInfo?.title}</h2>
        <div className='d-flex justify-content-between'>
          <p className='col-8 px-3'>{courseInfo?.description}</p>
          <div className='col-3'>
            <Record caption={'ID'} text={courseId} />
            <Record
              caption={'Duration'}
              text={convertMinutesToTime(courseInfo?.duration)}
            />
            <Record
              caption={'Created'}
              text={convertDate(courseInfo?.creationDate)}
            />
            <Record caption={'Authors'} title={courseInfo?.authors.join(', ')}>
              {courseService.getAuthorsByIds(courseInfo?.authors)}
            </Record>
          </div>
        </div>
      </article>
    </div>
  );
};

CourseInfo.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

CourseInfo.defaultProps = {
  isLoggedIn: false,
};
