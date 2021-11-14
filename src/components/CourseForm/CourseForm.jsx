import React, { useReducer, useCallback, useEffect } from 'react';
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

import { addNewCourse, updateCourse } from 'store/courses/thunk';

export const CourseForm = ({ setIsLoading }) => {
  const history = useHistory();

  const [courseFormStore, dispatch] = useReducer(reducer, initCourse, reset);

  const onChangeHandler = useCallback(
    (actionType) => (e) =>
      dispatch({ type: actionType, payload: e.target.value }),
    [dispatch]
  );

  const memoDispatch = useCallback(dispatch, [dispatch]);

  const globalDispatch = useDispatch();

  const createUpdateCourseHandler = useCallback(async () => {
    const checkFields = validateCourseFields(courseFormStore);
    if (checkFields.length) {
      callAlert(checkFields);
      return;
    }
    setIsLoading(true);

    if (history.location?.state) {
      globalDispatch(
        updateCourse({ ...courseFormStore, id: history.location?.state.id })
      );
    } else {
      globalDispatch(addNewCourse(courseFormStore));
    }

    dispatch({ type: ACTIONS.RESET });
    setIsLoading(false);
    history.push(APP.COURSES);
  }, [courseFormStore, setIsLoading, globalDispatch, history]);

  useEffect(() => {
    const state = history.location?.state;
    console.log(state);
  }, []);

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
              value={history.location?.state?.title || courseFormStore.title}
            />
          </div>
          <div className='btn-group'>
            <Button
              buttonText={`${
                history.location?.state ? 'Update' : 'Create'
              } course`}
              btnClassName='btn-outline-success btn-wide fs-4'
              onClick={createUpdateCourseHandler}
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
            value={
              history.location?.state?.description ||
              courseFormStore.description
            }
          />
        </div>
        <InfoWrapper dispatch={memoDispatch} store={courseFormStore} />
      </section>
    </div>
  );
};

CourseForm.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
};
