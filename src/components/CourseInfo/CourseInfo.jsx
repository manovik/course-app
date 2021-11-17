import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Record } from 'common/Record';

import { coursesAPI } from 'services';

import { convertMinutesToTime, convertDate, arrayToString } from 'helpers';

import { APP, initCourseInfo } from 'appConstants';

import { getAuthors } from 'store/selectors';

export const CourseInfo = () => {
  const [courseInfo, setCourseInfo] = useState(initCourseInfo);
  const history = useHistory();

  const { courseId } = useParams();

  const authors = useSelector(getAuthors);

  useEffect(() => {
    coursesAPI
      .getCourseById(courseId)
      .then((course) => {
        const mappedAuthors = coursesAPI.getAuthorsByIds(
          course.authors,
          authors
        );
        const namesArray = mappedAuthors.map((a) => a.name);
        setCourseInfo({ ...course, authors: namesArray });
      })
      .catch((err) => {
        console.error(err);
        history.push(APP.ANY);
      });
  }, [authors, courseId, history]);

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
            <Record
              caption={'Authors'}
              title={arrayToString(courseInfo?.authors)}
            >
              {courseInfo?.authors}
            </Record>
          </div>
        </div>
      </article>
    </div>
  );
};
