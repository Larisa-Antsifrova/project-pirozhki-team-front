import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ type, text, onClick }) => (
  <button type={type} className="button" onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  onClick: null,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
