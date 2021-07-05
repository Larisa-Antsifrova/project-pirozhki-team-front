import React from 'react';
import './Title.scss';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return <h2 className="titleText">{text}</h2>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
