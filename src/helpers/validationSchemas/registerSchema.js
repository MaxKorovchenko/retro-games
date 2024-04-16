import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .matches(
      /^[a-zA-Z0-9_]+$/,
      'Username can only contain letters, numbers, and underscores'
    )
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must not exceed 30 characters')
    .required('Password is required'),
});
