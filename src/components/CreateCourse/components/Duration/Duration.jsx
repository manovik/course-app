import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import { Input } from 'common/Input';
import { GridTitle } from 'common/GridTitle';

import { convertMinutesToTime } from 'helpers';

import { ACTIONS } from 'components/CreateCourse/store/actions';

export const Duration = ({ dispatch }) => {
  const [hours, setHours] = useState('00:00 hours');

  const changeHandler = (e) => {
    const { value } = e.target;

    dispatch({ type: ACTIONS.SET_DURATION, payload: +value });
    setHours(convertMinutesToTime(value));
  };

  return (
    <div className='d-flex flex-column'>
      <GridTitle title='Duration' />
      <Input
        htmlId={'addDuration'}
        labelText={'Duration'}
        placeholderText={'Enter duration in minutes…'}
        onChange={changeHandler}
        className={'input-form fs-5 mt-3'}
        type={'number'}
      />

      <p className='fs-2'>
        <span>Duration: </span>
        <span className='fs-2'>{hours}</span>
      </p>
    </div>
  );
};

Duration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
