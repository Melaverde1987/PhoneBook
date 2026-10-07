import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import { FormContainer } from './RegisterForm.styled';

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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleSubmitTest = values => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="container">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" />
          </div>

          <div className="container">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className="container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </FormContainer>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          handleSubmitTest(values);
          actions.resetForm();
        }}
      >
        <Form>
          <div className="container">
            <label htmlFor="name">Username</label>
            <Field type="name" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="container">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>

          <button type="submit" className="btn btn-primary">
            Register Test
          </button>
        </Form>
      </Formik>
    </>
  );
};
