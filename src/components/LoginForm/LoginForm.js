import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notify from '../Notify/Notify';

import TextInput from '../TextInput';
import operation from '../../redux/auth/authOperations';
import sprite from '../../images/sprite.svg';
import '../RegistrationForm/RegistrationForm.scss';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: '',
    password: '',
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
  });

  const onSubmit = (
    { email, password },
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      dispatch(operation.login({ email: email.toLowerCase(), password }));
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  const notify = () => toast.error('Неверные почта или пароль');

  return (
    <>
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
            />

            <button className="authBtnCurrent" type="submit" onClick={notify}>
              Вход
            </button>
          </Form>
        </Formik>
        <NavLink to="/auth/register" exact className="authBtnRedirect">
          Регистрация
        </NavLink>
      </div>
    </>
  );
}
