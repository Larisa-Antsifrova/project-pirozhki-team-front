import * as yup from 'yup';

export const validationRegisterShema = yup.object({
  email: yup
    .string()
    .lowercase()
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
  name: yup.string().min(1).max(30, 'Не более 30 символов'),
});

export const validationLoginShema = yup.object({
  email: yup
    .string()
    .lowercase()
    .email('Неверный формат записи почты')
    .required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
});
