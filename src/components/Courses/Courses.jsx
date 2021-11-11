import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

import { NothingToShow } from 'common/NothingToShow';
import { Button } from 'common/Button';

import { authorService, courseService } from 'services';

import { APP } from 'utils/appRoutes';
import { addCourseList } from 'store/courses/actionCreators';
import { addAuthors } from 'store/authors/actionCreators';
import { getAuthors, getCourses } from 'selectors';

export const Courses = () => {
  const history = useHistory();
  const [coursesToShow, setCoursesToShow] = useState([]);

  const courses = useSelector(getCourses);
  const authors = useSelector(getAuthors);
  const dispatch = useDispatch();

  const fetchCourses = useCallback(async () => {
    await authorService.getAll().then((data) => {
      dispatch(addAuthors(data));
    });
    await courseService.getAll().then((data) => {
      dispatch(addCourseList(data));
    });
  }, [dispatch]);

  const mapAuthors = useCallback(() => {
    const a = courseService.getMappedCoursesOnAuthors(courses, authors);
    setCoursesToShow(a);
  }, [courses, authors]);

  const searchCourses = (str) => {
    const rgx = RegExp(`${str}`, 'gi');
    return coursesToShow.filter((course) => {
      return rgx.test(course.id) || rgx.test(course.title);
    });
  };

  const onSearch = (value) => {
    if (!value) {
      setCoursesToShow(courses);
      mapAuthors();
      return;
    }

    setCoursesToShow(searchCourses(value));
  };

  const onClearInput = () => {
    setCoursesToShow(courses);
    mapAuthors();
  };

  useEffect(() => {
    if (courses.length) return; // remove after implementing sending new course to api

    fetchCourses();
  }, [fetchCourses, courses.length]);

  useEffect(() => {
    mapAuthors();
  }, [mapAuthors]);

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
