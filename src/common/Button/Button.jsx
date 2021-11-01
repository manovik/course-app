import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

export const Button = ({ buttonText, btnClassName, type, onClick }) => {
  return (
    <button
      className={'btn ' + btnClassName}
      type={type ? type : 'button'}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  btnClassName: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
