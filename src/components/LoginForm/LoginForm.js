import React from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import Title from '../Title';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const handleChange = ({ target: { name, value } }) => {
    console.log('name', name);
    console.log('value', value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  const { email, password } = INITIAL_STATE;
  return (
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
      <Form onSubmit={handleSubmit} autoComplete={'off'}>
        <Label>
          <Input
            type={'email'}
            name={'email'}
            value={email}
            placeholder={'E-mail'}
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

        <Button type={'submit'} text={'Вход'} />
        <NavLink to="/register" exact className="link">
          Регистрация
        </NavLink>
      </Form>
    </div>
  );
}
