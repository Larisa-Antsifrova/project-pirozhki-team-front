import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import sprite from '../../images/sprite.svg';
import './RegistrationForm.scss';

import Title from '../Title';
import Container from '../Container';
import TextInput from '../TextInput';
import operation from '../../redux/auth/authOperations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const INITIAL_VALUES = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  };

  const validationShema = yup.object({
    email: yup
      .string()
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
    name: yup.string().min(1).max(12, 'Не более 12 символов'),
  });

  const onSubmit = (
    { email, password, name },
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      const newUser = { email, password, name };
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
    <Container>
      <div className="formContainer">
        <Title
          text={
            <>
              <svg className="iconNavigation" width="38" height="38">
                <use href={sprite + '#wallet-icon'} />
              </svg>
              <span className="titleForm">Wallet</span>
            </>
          }
        />

        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={validationShema}
          validateOnBlur
          validateOnChange
          onSubmit={onSubmit}
        >
          <Form className="regForm">
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

            <button className="regBtn" type="submit">
              Регистрация
            </button>
          </Form>
        </Formik>
        <NavLink to="/login" exact className="loginlink">
          Вход
        </NavLink>
      </div>
    </Container>
  );
}
