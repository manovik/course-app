import React from 'react';
import './button.scss';

const Button = ({ buttonText, btnClassName, type, onClick }) => (
  <button
    className={'btn ' + btnClassName}
    type={type ? type : 'button'}
    onClick={onClick}
  >
    {buttonText}
  </button>
);

export default Button;
