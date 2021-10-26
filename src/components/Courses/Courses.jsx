import React, { useState, useEffect, useReducer } from 'react';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { reducer, reset } from './store/reducer';
import { ACTIONS } from './store/actions';

import { CreateCourse } from 'components/CreateCourse';

import { NothingToShow } from 'common/NothingToShow';
import { Button } from 'common/Button';

import { mockedCoursesList } from 'mock/mockedCoursesList';

import { CourseService } from 'services';

import { validateCourseFields, callAlert } from 'helpers';

const courseService = new CourseService(mockedCoursesList);

const initCourse = {
  title: '',
  description: '',
  duration: 0,
  authors: [],
};

const Courses = ({ isLoadingHandler }) => {
  const [courseToCreate, dispatch] = useReducer(reducer, initCourse, reset);

  const [isCreateMode, setIsCreateMode] = useState(false);
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
    const rgx = RegExp(`${str}`, 'g');
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

  const switchPage = () => setIsCreateMode(!isCreateMode);

  const createNewCourse = () => {
    const checkFields = validateCourseFields(courseToCreate);
    if (checkFields.length) {
      callAlert(checkFields);
      return;
    }

    const newCourseWithFullInfo = courseService.createNewCourse(courseToCreate);
    courseService.add(newCourseWithFullInfo);

    setCourses(courseService.getAll());

    isLoadingHandler(true);
    setTimeout(() => {
      isLoadingHandler(false);
    }, 1500);

    setIsCreateMode(!isCreateMode);
    dispatch({ type: ACTIONS.RESET });
  };

  return isCreateMode ? (
    <CreateCourse
      createModeSwitcher={switchPage}
      createNewCourse={createNewCourse}
      dispatch={dispatch}
    />
  ) : (
    <section>
      <div className='d-flex justify-content-between mb-4'>
        <SearchBar searchHandler={onSearch} clearInputHandler={onClearInput} />
        <Button
          buttonText='Add new course'
          btnClassName='btn-outline-success btn-wide fs-4'
          onClick={switchPage}
        />
      </div>
      {(coursesToShow &&
        coursesToShow.length &&
        coursesToShow.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))) || <NothingToShow />}
    </section>
  );
};

export default Courses;
