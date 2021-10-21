import React from 'react';
import { Input } from '@common/Input';
import { GridTitle } from '@common/GridTitle';

const Duration = () => {
  return (
    <div className='d-flex flex-column'>
      <GridTitle title='Duration' />
      <Input
        htmlId={'addDuration'}
        labelText={'Duration'}
        placeholdetText={'Enter duration in minutes…'}
        onChange={console.log}
        className={'input-form fs-5 mt-3'}
      />
      <p className='fs-2'>
        <span>Duration: </span>
        <span className='fs-1'>
          <span>00</span>:<span>00</span>
        </span>
        <span> hours</span>
      </p>
    </div>
  );
};

export default Duration;
