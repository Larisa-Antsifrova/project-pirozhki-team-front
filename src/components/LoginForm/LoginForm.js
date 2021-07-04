import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Title from '../Title';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      alert('Fill In all areas');
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Title text={'Wallet'} />
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
