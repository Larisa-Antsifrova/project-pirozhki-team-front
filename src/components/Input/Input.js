import React from 'react';
import './Input.scss';
// import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input className="input" {...field} {...props} autoComplete="off" />
      <ErrorMessage component="div" name={field.name} />
    </div>
  );
};

// Input.defaultProps = {
//   id: null,
//   placeholder: null,
// };

// Input.propTypes = {
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string,
//   id: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

export default Input;
