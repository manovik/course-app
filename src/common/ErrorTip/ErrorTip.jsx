import React from 'react';

const ErrorTip = ({ errorMessages }) => {
  return (
    <div className='alert alert-danger error-tip fs-4' role='alert'>
      {errorMessages?.map((err, i) => (
        <p>
          Error #{i + 1}: {err}
        </p>
      )) || <p>Something went wrong!</p>}
    </div>
  );
};

export default React.memo(ErrorTip);
