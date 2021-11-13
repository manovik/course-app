import React, { useReducer, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { InfoWrapper } from './components/InfoWrapper';

import { Input } from 'common/Input';
import { Button } from 'common/Button';
import { TextArea } from 'common/TextArea';

import { ACTIONS } from './store/actions';
import { reducer, reset } from './store/reducer';

import { validateCourseFields, callAlert } from 'helpers';

import { initCourse } from 'utils/courseStructure';
import { APP } from 'appConstants';

import { courseService } from 'services';
import { addNewCourse } from 'store/courses/thunk';

export const CourseForm = ({ setIsLoading }) => {
  const history = useHistory();

  const [courseToCreate, dispatch] = useReducer(reducer, initCourse, reset);

  const onChangeHandler = useCallback(
    (actionType) => (e) =>
      dispatch({ type: actionType, payload: e.target.value }),
    [dispatch]
  );

  const memoDispatch = useCallback(dispatch, [dispatch]);

  const addCourseToStore = useDispatch();

  const createNewCourse = useCallback(async () => {
    const checkFields = validateCourseFields(courseToCreate);
    if (checkFields.length) {
      callAlert(checkFields);
      return;
    }
    setIsLoading(true);

    const newCourseWithFullInfo = courseService.createNewCourse(courseToCreate);
    addCourseToStore(addNewCourse(newCourseWithFullInfo));

    dispatch({ type: ACTIONS.RESET });
    history.push(APP.COURSES);

    setIsLoading(false);
  }, [courseToCreate, setIsLoading, addCourseToStore, history]);

  return (
    <div className='container'>
      <section className='fs-4'>
        <div className='d-flex justify-content-between'>
          <div className='w-25 mb-2'>
            <Input
              htmlId='createTitle'
              labelText='Title'
              placeholderText='Enter title'
              onChange={onChangeHandler(ACTIONS.SET_TITLE)}
              className='form-control mt-2 fs-4'
              type='text'
            />
          </div>
          <div className='btn-group'>
            <Button
              buttonText='Create course'
              btnClassName='btn-outline-success btn-wide fs-4'
              onClick={createNewCourse}
            />
            <Button
              buttonText='Back'
              btnClassName='btn-outline-danger btn-wide fs-4'
              onClick={() => history.push(APP.COURSES)}
            />
          </div>
        </div>
        <div className='mb-2 mt-4'>
          <TextArea
            htmlId='createDescription'
            labelText='Description'
            placeholderText='Enter description'
            onChange={onChangeHandler(ACTIONS.SET_DESCR)}
            className='form-control mt-2 mb-2 fs-4'
          />
        </div>
        <InfoWrapper dispatch={memoDispatch} />
      </section>
    </div>
  );
};

CourseForm.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
};
