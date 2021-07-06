// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { Formik, Form } from 'formik';
// import * as yup from 'yup';
// import sprite from '../../images/sprite.svg';
// import './RegistrationForm.scss';

// import Title from '../Title';
// // import Form from '../Form';
// import Label from '../Label';
// import Input from '../Input';
// import Button from '../Button';
// import operation from '../../redux/auth/authOperations';

// // export default function RegisterForm() {
// //   const INITIAL_VALUES = {
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     name: '',
// //   };

// //   const validationShema = yup.object({
// //     email: yup
// //       .string()
// //       .email('Неверный формат записи почты')
// //       .required('Обязательное поле'),
// //     password: yup
// //       .string()
// //       .min(6, 'Не менее 6 символов')
// //       .max(12, 'Не более 12 символов')
// //       .required('Обязательное поле'),
// //     confirmPassword: yup
// //       .string()
// //       .oneOf([yup.ref('password'), ''], 'Пароли должны совпадать')
// //       .required('Обязательное поле'),
// //     name: yup.string().min(1).max(12, 'Не более 12 символов'),
// //   });

// //   const handleChange = ({ target: { name, value } }) => {
// //     INITIAL_VALUES[name] = value;
// //     console.log('value', name);
// //   };
// //   const onSubmit = values => {
// //     console.log('submit', values);
// //   };

// export default function RegisterForm() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

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
//   };
//   // const handleChange = ({ target: { name, value } }) => {
//   //   console.log('name', name);
//   //   console.log('value', value);
//   // };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const newUser = {
//       name,
//       email,
//       password,
//       confirmPassword,
//     };
//     dispatch(operation.register(newUser));

//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   // const handleSubmit = e => {
//   //   e.preventDefault();
//   //   console.log('submit');
//   // };

//   // const { name, email, password } = INITIAL_STATE;
//   return (
//     <Formik
//       initialValues={INITIAL_VALUES}
//       validationShema={validationShema}
//       onSubmit={onSubmit}
//     >
//       {formik => (
//         <div>
//           <Title
//             text={
//               <>
//                 <svg className="iconNavigation" width="38" height="38">
//                   <use href={sprite + '#wallet-icon'} />
//                 </svg>
//                 <span className="titleForm">Wallet</span>
//               </>
//             }
//           />
//           {console.log(formik.values)}
//           <Form onSubmit={onSubmit} autoComplete={'off'}>
//             {/* <input type="text"/> */}
//             <Label>
//               <Input
//                 type={'email'}
//                 name={'email'}
//                 // value={INITIAL_VALUES.email}
//                 placeholder={'E-mail:'}
//                 // onChange={handleChange}
//               />
//             </Label>

//             <Label>
//               <Input
//                 type={'password'}
//                 name={'password'}
//                 // value={INITIAL_VALUES.password}
//                 placeholder={'Пароль'}
//                 // onChange={handleChange}
//               />
//             </Label>

//         <Label>
//           <Input
//             type={'password'}
//             name={'password_repead'}
//             value={confirmPassword}
//             placeholder={'Подтвердите пароль'}
//             onChange={handleChange}
//           />
//         </Label>

//             <Label>
//               <Input
//                 type={'text'}
//                 name={'name'}
//                 // value={INITIAL_VALUES.name}
//                 placeholder={'Ваше Имя'}
//                 // onChange={handleChange}
//               />
//             </Label>

//             <Button type={'submit'} text={'Регистрация'} />
//             <NavLink to="/login" exact className="link">
//               Вход
//             </NavLink>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   );
// }
