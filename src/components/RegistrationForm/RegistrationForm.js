import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { validationRegisterShema } from '../../helpers/validations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notify from '../Notify/Notify';
import { getIsError } from '../../redux/auth/authSelectors';

import sprite from '../../images/sprite.svg';
import './RegistrationForm.scss';
import TextInput from '../TextInput';
import Button from '../Button';
import PasswordStrengthMeter from '../PasswordStrengthMeter';
import operation from '../../redux/auth/authOperations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const isError = useSelector(getIsError);

  useEffect(() => {
    dispatch(operation.errorInit());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error('Эта почта уже занята');
    }
  }, [isError]);

  const INITIAL_VALUES = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };

  const onSubmit = (
    { email, password, name },
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      const newUser = { email: email.toLowerCase(), password, name };

      dispatch(operation.errorInit());
      dispatch(operation.register(newUser));
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <div className="formContainer">
      <p className="formHeaderTitle">
        <svg className="formHeaderIcon">
          <use href={sprite + '#wallet-icon'} />
        </svg>
        <span className="formHeaderText">Wallet</span>
      </p>

      {isError && <Notify />}

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationRegisterShema}
        validateOnBlur
        validateOnChange
        onSubmit={onSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="authForm">
            <TextInput
              icon="#email-field-icon"
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <TextInput
              icon="#password-field-icon"
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              values={values.password}
            />
            <PasswordStrengthMeter password={values.password} />
            <TextInput
              icon="#password-field-icon"
              name="confirmPassword"
              type="password"
              placeholder="Подтвердите пароль"
            />
            <TextInput
              icon="#name-field-icon"
              name="name"
              type="text"
              placeholder="Ваше Имя"
            />

            <Button
              className="authBtnCurrent"
              type="submit"
              text="Регистрация"
            />
          </Form>
        )}
      </Formik>
      <NavLink to="/auth/login" exact className="authBtnRedirect">
        Войти
      </NavLink>
    </div>
  );
}
