import React from 'react';

import { ACTIONS } from 'components/Courses/store/actions';

import { Input } from 'common/Input';
import { Button } from 'common/Button';
import { TextArea } from 'common/TextArea';

import { InfoWrapper } from './components/InfoWrapper';

const CreateCourse = ({ createModeSwitcher, createNewCourse, dispatch }) => {
  const onChangeHandler = (actionType) => (e) =>
    dispatch({ type: actionType, payload: e.target.value });

  return (
    <section className='fs-4'>
      <div className='d-flex justify-content-between'>
        <div className='w-25 mb-2'>
          <Input
            htmlId='createTitle'
            labelText='Title'
            placeholdetText='Enter title'
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
            onClick={createModeSwitcher}
          />
        </div>
      </div>
      <div className='mb-2 mt-4'>
        <TextArea
          htmlId='createDescription'
          labelText='Description'
          placeholdetText='Enter description'
          onChange={onChangeHandler(ACTIONS.SET_DESCR)}
          className='form-control mt-2 mb-2 fs-4'
        />
      </div>
      <InfoWrapper dispatch={dispatch} />
    </section>
  );
};

export default CreateCourse;
