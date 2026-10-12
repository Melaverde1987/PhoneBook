import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import {
  FormContainer,
  FieldContainer,
  Error,
  ToggleButton,
  InputControl,
} from './RegisterForm.styled';
import { Button } from 'components/Button/Button';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FieldContainer>
            <label htmlFor="name">Username</label>
            <Field type="name" id="name" name="name" placeholder="Username" />
            <Error name="name" />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
            />
            <Error name="email" />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="password">Password</label>
            <InputControl>
              <Field
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
              />
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(previous => !previous)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-controls="password"
              >
                {showPassword ? (
                  <FiEyeOff FiEye aria-hidden="true" />
                ) : (
                  <FiEye aria-hidden="true" />
                )}
              </ToggleButton>
            </InputControl>
            <Error name="password" />
          </FieldContainer>

          <Button type="submit" mode="primary" style={{ marginTop: '12px' }}>
            Register
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
