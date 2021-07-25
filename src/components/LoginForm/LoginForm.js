import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { validationLoginShema } from '../../helpers/validations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notify from '../Notify/Notify';
import { getIsError } from '../../redux/auth/authSelectors';

import TextInput from '../TextInput';
import Button from '../Button';
import operation from '../../redux/auth/authOperations';
import sprite from '../../images/sprite.svg';
import '../RegistrationForm/RegistrationForm.scss';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const isError = useSelector(getIsError);

  useEffect(() => {
    dispatch(operation.errorInit());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error('Неверные почта или пароль');
    }
  }, [isError]);

  const INITIAL_VALUES = {
    email: '',
    password: '',
  };

  const onSubmit = (
    { email, password },
    { setSubmitting, setErrors, setStatus },
  ) => {
    try {
      dispatch(operation.errorInit());
      dispatch(operation.login({ email: email.toLowerCase(), password }));
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <>
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
          validationSchema={validationLoginShema}
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

            <Button className="authBtnCurrent" type="submit" text="Войти" />
          </Form>
        </Formik>
        <NavLink to="/auth/register" exact className="authBtnRedirect">
          Регистрация
        </NavLink>
      </div>
    </>
  );
}
