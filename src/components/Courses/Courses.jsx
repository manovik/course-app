import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

import { NothingToShow } from 'common/NothingToShow';
import { Button } from 'common/Button';

import { courseService } from 'services';

import { APP } from 'utils/appRoutes';
import { addCourseList } from 'store/courses/actionCreators';

export const Courses = () => {
  const history = useHistory();
  const [coursesToShow, setCoursesToShow] = useState([]);

  const courses = useSelector((store) => store.courses);
  const dispatch = useDispatch();

  const getCourses = useCallback(async () => {
    await courseService.getAll().then((data) => {
      dispatch(addCourseList(data));
    });
  }, [dispatch]);

  useEffect(() => {
    if (courses.length) return;

    getCourses();
    // help???
  }, [getCourses]);

  useEffect(() => {
    const mappedCourses = courseService.getMappedCoursesOnAuthors(courses);
    setCoursesToShow(mappedCourses);
  }, [courses]);

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
