import React from 'react';
import { useField } from 'formik';
import sprite from '../../images/sprite.svg';
import './TextInput.scss';

const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="formElement">
      <input className="textInput" {...field} {...props} />

      <svg className="formElementIcon">
        <use href={sprite + icon}></use>
      </svg>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
