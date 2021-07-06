import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import sprite from '../../images/sprite.svg';
import './RegistrationForm.scss';

import Title from '../Title';
// import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

export default function RegisterForm() {
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

  const handleChange = ({ target: { name, value } }) => {
    INITIAL_VALUES[name] = value;
    console.log('value', name);
  };
  const onSubmit = values => {
    console.log('submit', values);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationShema={validationShema}
      onSubmit={onSubmit}
    >
      {formik => (
        <div>
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
          {console.log(formik.values)}
          <Form onSubmit={onSubmit} autoComplete={'off'}>
            {/* <input type="text"/> */}
            <Label>
              <Input
                type={'email'}
                name={'email'}
                // value={INITIAL_VALUES.email}
                placeholder={'E-mail:'}
                // onChange={handleChange}
              />
            </Label>

            <Label>
              <Input
                type={'password'}
                name={'password'}
                // value={INITIAL_VALUES.password}
                placeholder={'Пароль'}
                // onChange={handleChange}
              />
            </Label>

            <Label>
              <Input
                type={'password'}
                name={'confirm-password'}
                // value={INITIAL_VALUES.password}
                placeholder={'Подтвердите пароль'}
                // onChange={handleChange}
              />
            </Label>

            <Label>
              <Input
                type={'text'}
                name={'name'}
                // value={INITIAL_VALUES.name}
                placeholder={'Ваше Имя'}
                // onChange={handleChange}
              />
            </Label>

            <Button type={'submit'} text={'Регистрация'} />
            <NavLink to="/login" exact className="link">
              Вход
            </NavLink>
          </Form>
        </div>
      )}
    </Formik>
  );
}
