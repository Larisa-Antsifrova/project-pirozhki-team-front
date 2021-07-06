import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Title from '../Title';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';
import operation from '../../redux/auth/authOperations';

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   password: '',
// };

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password_repead':
        setConfirmPassword(value);
        break;
      default:
        console.log('Привет, ну ты куда вводишь?))');
    }
  };
  // const handleChange = ({ target: { name, value } }) => {
  //   console.log('name', name);
  //   console.log('value', value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };
    dispatch(operation.register(newUser));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('submit');
  // };

  // const { name, email, password } = INITIAL_STATE;
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
            value={confirmPassword}
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
