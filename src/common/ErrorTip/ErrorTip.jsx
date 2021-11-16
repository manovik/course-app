import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { clearErrors } from 'store/appState/actionCreators';

export const ErrorTip = React.memo(({ errorMessages }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
  };
  return (
    <div
      className='alert alert-danger error-tip fs-4 d-flex justify-content-between flex-nowrap'
      role='alert'
    >
      <div>
        {errorMessages?.map((err, i) => <p key={i}># {err}</p>) || (
          <p>Something went wrong!</p>
        )}
      </div>
      <button className='btn btn-outline-dark fs-2' onClick={handleClick}>
        &times;
      </button>
    </div>
  );
});

ErrorTip.propTypes = {
  errorMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
