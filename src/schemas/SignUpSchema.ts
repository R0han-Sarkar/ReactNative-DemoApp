import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Please enter your full name')
    .matches(/(\w.+\s).+/, 'Please enter your surname too'),
  email: Yup.string()
    .required('Please enter your email')
    .email('Invalid Email'),
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(20, 'Username must not exceed 20 characters'),
  phone: Yup.string()
    .required('Please enter your mobile number')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .matches(/^[0-9]+$/, 'Must be only digits'),
  password: Yup.string()
    .required('Password is required')
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});
