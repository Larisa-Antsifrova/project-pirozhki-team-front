import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from '../Title';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const handleChange = ({ target: { name, value } }) => {
    console.log('name', name);
    console.log('value', value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  const { name, email, password } = INITIAL_STATE;
  return (
    <div>
      <Title text={'Wallet'} />
      <Form onSubmit={handleSubmit} autoComplete={'off'}>
        <Label>
          <Input
            type={'email'}
            name={'email'}
            value={email}
            placeholder={'E-mail:'}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <Input
            type={'password'}
            name={'password'}
            value={password}
            placeholder={'Пароль'}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <Input
            type={'password'}
            name={'password_repead'}
            value={password}
            placeholder={'Подтвердите пароль'}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <Input
            type={'text'}
            name={'name'}
            value={name}
            placeholder={'Ваше Имя'}
            onChange={handleChange}
          />
        </Label>

        <Button type={'submit'} text={'Регистрация'} />
        <NavLink to="/login" exact className="link">
          Вход
        </NavLink>
      </Form>
    </div>
  );
}
