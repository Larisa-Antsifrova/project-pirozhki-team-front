import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, text, onClick, className }) => (
  <button type={type} className={className} onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  onClick: null,
  className: null,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
