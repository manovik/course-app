import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

import { NothingToShow } from 'common/NothingToShow';
import { Button } from 'common/Button';

import { courseService } from 'services';

import { APP } from 'utils/appRoutes';

export const Courses = () => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [coursesToShow, setCoursesToShow] = useState([]);

  useEffect(() => {
    setCourses(courseService.getAll());
  }, []);

  useEffect(() => {
    const mappedCourses = courseService.getMappedCoursesOnAuthors();
    setCoursesToShow(mappedCourses);
  }, [courses]);

  const searchCourses = (str) => {
    const rgx = RegExp(`${str}`, 'gi');
    return courses.filter((course) => {
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
    setCourses(courseService.getAll());
  };

  return (
    <div className='container'>
      <section>
        <div className='d-flex justify-content-between mb-4'>
          <SearchBar
            searchHandler={onSearch}
            clearInputHandler={onClearInput}
          />
          <Button
            buttonText='Add new course'
            btnClassName='btn-outline-success btn-wide fs-4'
            onClick={() => history.push(APP.COURSES_ADD)}
          />
        </div>
        {(coursesToShow?.length &&
          coursesToShow.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))) || <NothingToShow />}
      </section>
    </div>
  );
};
