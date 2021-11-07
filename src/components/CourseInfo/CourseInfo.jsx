import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Record } from 'common/Record';

import { courseService } from 'services';

import { convertMinutesToTime, convertDate } from 'helpers';

import { initCourseInfo } from 'utils/courseStructure';
import { APP } from 'utils/appRoutes';
import { getAuthors, getCourses } from 'selectors';

export const CourseInfo = () => {
  const [courseInfo, setCourseInfo] = useState(initCourseInfo);

  const { courseId } = useParams();

  const courses = useSelector(getCourses);
  const authors = useSelector(getAuthors);

  useEffect(() => {
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      const [mappedCourse] = courseService.getMappedCoursesOnAuthors(
        [course],
        authors
      );
      setCourseInfo(mappedCourse);
    }
  }, [courseId, courses, authors]);

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
              {courseInfo?.authors}
            </Record>
          </div>
        </div>
      </article>
    </div>
  );
};
