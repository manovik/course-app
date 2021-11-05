import React from 'react';

export const Loader = () => {
  return (
    <div
      style={{ backgroundColor: 'rgba(0,0,100,0.1)', zIndex: '999' }}
      className='d-flex justify-content-center align-items-center w-100 h-100 position-absolute'
    >
      <div
        className='spinner-border'
        style={{ width: '20rem', height: '20rem' }}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
