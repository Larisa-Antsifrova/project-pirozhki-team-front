import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Title from '../Title';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    console.log('name', name);
    console.log('value', value);
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      default:
        alert('Some areas are empty!');
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    if (!email || !password) {
      alert('Some areas are empty!');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
            name={'password'}
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
