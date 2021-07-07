import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import sprite from '../../images/sprite.svg';
import '../RegistrationForm/RegistrationForm.scss';

import Title from '../Title';
import Container from '../Container';
import TextInput from '../TextInput';
import operation from '../../redux/auth/authOperations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: '',
    password: '',
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
  });

  const onSubmit = (
    { email, password },
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      dispatch(operation.login({ email, password }));
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

            <button className="regBtn" type="submit">
              Вход
            </button>
          </Form>
        </Formik>
        <NavLink to="/register" exact className="loginlink">
          Регистрация
        </NavLink>
      </div>
    </Container>
  );
}
