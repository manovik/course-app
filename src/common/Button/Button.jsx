import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';
import { icons } from './icons';
import { testIds } from 'testUtils';

const getButtonCaption = (text) => {
  switch (text) {
    case 'trash':
      return icons.trash;
    case 'edit':
      return icons.edit;
    default:
      return text;
  }
};

export const Button = ({
  buttonText,
  btnClassName,
  type,
  onClick,
  dataTestId,
}) => {
  return (
    <button
      className={'btn ' + btnClassName}
      type={type ? type : 'button'}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {getButtonCaption(buttonText)}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  btnClassName: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  dataTestId: testIds.BUTTON_TEST_ID,
  buttonText: 'Button',
  btnClassName: 'btn-outline-secondary',
  type: 'button',
  onClick: () => undefined,
};
