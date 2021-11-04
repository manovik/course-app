import React, { useState } from 'react';

import { Input } from 'common/Input';
import { GridTitle } from 'common/GridTitle';

import { convertMinutesToTime } from 'helpers';
import { ACTIONS } from 'components/CreateCourse/store/actions';

import { PropTypes } from 'prop-types';

const containsLetters = (value) => /[a-zA-Zа-яА-Я]/g.test(value);

export const Duration = ({ dispatch }) => {
  const [hours, setHours] = useState('00:00 hours');
  const [isError, setIsError] = useState(false);

  const changeHandler = (e) => {
    const { value } = e.target;

    if (containsLetters(value)) {
      setHours(convertMinutesToTime(0));
      dispatch({ type: ACTIONS.SET_DURATION, payload: 0 });
      setIsError(true);
      return;
    } else {
      setIsError(false);
      dispatch({ type: ACTIONS.SET_DURATION, payload: value });
      setHours(convertMinutesToTime(value));
    }
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
      />
      {isError ? (
        <div className='alert alert-danger' role='alert'>
          Invalid duration
        </div>
      ) : (
        <p className='fs-2'>
          <span>Duration: </span>
          <span className='fs-2'>{hours}</span>
        </p>
      )}
    </div>
  );
};

Duration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Duration.defaultProps = {
  dispatch: () => console.log('Dispatch is not set'),
};
