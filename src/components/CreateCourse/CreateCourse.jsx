import React from 'react';
import { Input } from '@common/Input';
import { Button } from '@common/Button';
import { TextArea } from '@common/TextArea';
import { InfoWrapper } from './components/InfoWrapper';

const CreateCourse = ({ createModeHandler }) => {
  return (
    <section className='fs-4'>
      <div className='d-flex justify-content-between'>
        <div className='w-25 mb-2'>
          <Input
            htmlId='createTitle'
            labelText='Title'
            placeholdetText='Enter title'
            onChange={console.log}
            className='form-control mt-2 fs-4'
            type='text'
          />
        </div>
        <div className='btn-group'>
          <Button
            buttonText='Create course'
            btnClassName='btn-outline-success btn-wide fs-4'
            onClick={console.log}
          />
          <Button
            buttonText='Back'
            btnClassName='btn-outline-danger btn-wide fs-4'
            onClick={createModeHandler}
          />
        </div>
      </div>
      <div className='mb-2 mt-4'>
        <TextArea
          htmlId='createDescription'
          labelText='Description'
          placeholdetText='Enter description'
          onChange={console.log}
          className='form-control mt-2 mb-2 fs-4'
        />
      </div>
      <InfoWrapper />
    </section>
  );
};

export default CreateCourse;
