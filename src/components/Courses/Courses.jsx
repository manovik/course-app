import React, { useState, useEffect } from 'react';
import { CourseCard } from './components/CourseCard';
import { SearchBar } from '@components/SearchBar';
import { mapCoursesWithUsers } from '@helpers';
import { NothingToShow } from '@common/NothingToShow';
import { Button } from '@common/Button';
import CreateCourse from '../CreateCourse/CreateCourse';

const Courses = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [courses, setCourses] = useState([]);
  const [coursesToShow, setCoursesToShow] = useState([]);

  useEffect(() => {
    setCourses(mapCoursesWithUsers());
  }, []);

  useEffect(() => {
    setCoursesToShow(courses);
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
  const creatingPageHandler = () => setIsCreateMode(!isCreateMode);

  return isCreateMode ? (
    <CreateCourse createModeHandler={creatingPageHandler} />
  ) : (
    <section>
      <div className='d-flex justify-content-between mb-4'>
        <SearchBar searchHandler={onSearch} clearInputHandler={onClearInput} />
        <Button
          buttonText='Add new course'
          btnClassName='btn-outline-success btn-wide fs-4'
          onClick={creatingPageHandler}
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
