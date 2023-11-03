import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Please enter your registered username'),

  password: Yup.string().min(8).required('Please enter password!'),
});
