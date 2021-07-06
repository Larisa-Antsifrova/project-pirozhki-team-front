import React from 'react';
import { useField } from 'formik';
import sprite from '../../images/sprite.svg';
import './TextInput.scss';

const MyTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="formElement">
      <input className="textInput" {...field} {...props} />
      <div className="iconFormElement">
        <svg width="24" height="24">
          <use href={sprite + icon}></use>
        </svg>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;
