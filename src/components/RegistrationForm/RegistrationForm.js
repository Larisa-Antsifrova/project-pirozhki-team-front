import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import sprite from '../../images/sprite.svg';
import './RegistrationForm.scss';

import Title from '../Title';
import Container from '../Container';
import operation from '../../redux/auth/authOperations';

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

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const INITIAL_VALUES = {
    email,
    password,
    confirmPassword,
    name,
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

  const handleSubmit = ({ email, password, name }) => {
    const newUser = { email, password, name };
    console.log('newUser', newUser);
    dispatch(operation.register(newUser));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Container>
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
        onSubmit={handleSubmit}
      >
        <Form className="regForm">
          <MyTextInput
            icon="#email-field-icon"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <MyTextInput
            icon="#password-field-icon"
            name="password"
            type="password"
            placeholder="Пароль"
          />
          <MyTextInput
            icon="#password-field-icon"
            name="confirmPassword"
            type="password"
            placeholder="Подтвердите пароль"
          />
          <MyTextInput
            icon="#name-field-icon"
            name="name"
            type="text"
            placeholder="Ваше Имя"
          />

          <button className="regBtn" type="submit">
            Регистрация
          </button>
          <NavLink to="/login" exact className="loginlink">
            Вход
          </NavLink>
        </Form>
      </Formik>
    </Container>
  );

  //   const handleChange = e => {
  //     const { name, value } = e.currentTarget;
  //     switch (name) {
  //       case 'name':
  //         setName(value);
  //         break;
  //       case 'email':
  //         setEmail(value);
  //         break;
  //       case 'password':
  //         setPassword(value);
  //         break;
  //       case 'password_repead':
  //         setConfirmPassword(value);
  //         break;
  //       default:
  //         console.log('Привет, ну ты куда вводишь?))');
  //     }
}
