import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import { FormContainer } from './RegisterForm.styled';
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
          <div className="container">
            <label htmlFor="name">Username</label>
            <Field type="name" id="name" name="name" placeholder="Username" />
            <ErrorMessage name="name" />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="container">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>

          <Button type="submit" mode="primary">
            Register
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
