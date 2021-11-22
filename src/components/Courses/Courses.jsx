import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

import { NothingToShow } from 'common/NothingToShow';
import { Button } from 'common/Button';

import { APP, ROLES } from 'appConstants';

import { getCourses, getUser } from 'store/selectors';
import { testIds } from 'testUtils';

export const Courses = () => {
  const history = useHistory();
  const [coursesToShow, setCoursesToShow] = useState([]);

  const { role } = useSelector(getUser);

  const courses = useSelector(getCourses);

  const searchCourses = (str) => {
    const rgx = RegExp(`${str}`, 'gi');
    return coursesToShow.filter((course) => {
      return rgx.test(course.id) || rgx.test(course.title);
    });
  };

  const onSearch = (value) => {
    if (!value) {
      setCoursesToShow(courses);
      return;
    }

    setCoursesToShow(searchCourses(value));
  };

  const onClearInput = () => {
    setCoursesToShow(courses);
  };

  useEffect(() => {
    setCoursesToShow(courses);
  }, [setCoursesToShow, courses]);

  return (
    <div className='container'>
      <section>
        <div className='d-flex justify-content-between mb-4'>
          <SearchBar
            searchHandler={onSearch}
            clearInputHandler={onClearInput}
          />
          {role === ROLES.ADMIN && (
            <Button
              buttonText='Add new course'
              btnClassName='btn-outline-success btn-wide fs-4'
              onClick={() => history.push(APP.COURSES_ADD)}
              dataTestId={testIds.ADD_BTN}
            />
          )}
        </div>
        <div data-testid={testIds.COURSE_WRAPPER}>
          {!!coursesToShow?.length &&
            coursesToShow.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
        {!!coursesToShow?.length || <NothingToShow />}
      </section>
    </div>
  );
};
