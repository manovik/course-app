import React from 'react';
import PropTypes from 'prop-types';

export const ErrorTip = React.memo(({ errorMessages }) => {
  return (
    <div className='alert alert-danger error-tip fs-4' role='alert'>
      {errorMessages?.map((err, i) => (
        <p key={i}>
          Error #{i + 1}: {err}
        </p>
      )) || <p>Something went wrong!</p>}
    </div>
  );
});

ErrorTip.propTypes = {
  errorMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
