import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import sprite from '../../images/sprite.svg';
import './RegistrationForm.scss';
import TextInput from '../TextInput';
import Button from '../Button';
import PasswordStrengthMeter from '../PasswordStrengthMeter';
import operation from '../../redux/auth/authOperations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notify from '../Notify/Notify';
import { getIsError } from '../../redux/auth/authSelectors';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsError);

  useEffect(() => {
    if (isAuth) {
      toast.error('Неверные почта или пароль');
    }
  }, [isAuth]);

  const INITIAL_VALUES = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };

  const validationShema = yup.object({
    email: yup
      .string()
      .lowercase()
      .email('Неверный формат записи почты')
      .required('Обязательное поле'),
    password: yup
      .string()
      .min(6, 'Не менее 6 символов')
      .max(12, 'Не более 12 символов')
      .required('Обязательное поле'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Пароли должны совпадать')
      .required('Обязательное поле'),
    name: yup.string().min(1).max(30, 'Не более 30 символов'),
  });

  const onSubmit = (
    { email, password, name },
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      const newUser = { email: email.toLowerCase(), password, name };

      dispatch(operation.register(newUser));
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      toast.error('Неверные почта или пароль');
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

      <Notify />

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationShema}
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
            {/* <button
              className="authBtnCurrent"
              type="submit"
              disabled={!isValid && !dirty}
            >
              Регистрация
            </button> */}
          </Form>
        )}
      </Formik>
      <NavLink to="/auth/login" exact className="authBtnRedirect">
        Войти
      </NavLink>
    </div>
  );
}
