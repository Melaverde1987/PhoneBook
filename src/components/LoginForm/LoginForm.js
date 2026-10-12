import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import {
  FormContainer,
  FieldContainer,
  Error,
  ToggleButton,
  InputControl,
} from './LoginForm.styled';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(
      logIn({
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
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
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
            Log In
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
