import React, { useState, useEffect } from 'react';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

import { useHistory } from 'react-router-dom';

import { NothingToShow } from 'common/NothingToShow';
import { Button } from 'common/Button';

import { CourseService } from 'services';

import { APP } from 'utils/appRoutes';
import { useCheckIfUserLoggedIn } from 'hooks';

const courseService = new CourseService();

const Courses = ({ isLoggedIn }) => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [coursesToShow, setCoursesToShow] = useState([]);

  useCheckIfUserLoggedIn(isLoggedIn);

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
    setCoursesToShow(courses);
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

export default Courses;
