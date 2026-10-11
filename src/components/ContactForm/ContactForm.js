import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { FormContainer, FieldContainer, Error } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/api';
import { getContacts } from 'redux/contacts/selectors';
import { Button } from 'components/Button/Button';

const AddContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.number().min(2, 'Too Short!').required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contactNameTest = useSelector(getContacts);

  const handleSubmit = (newContact, contactNameTest) => {
    const normalizedName = newContact.name.toLowerCase();
    let duplicatedName = contactNameTest.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (duplicatedName) {
      toast.error(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name: newContact.name, number: newContact.phone }));
    toast.success('Succesfully added');
  };

  return (
    <FormContainer>
      <h2>Add new contact</h2>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={AddContactSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, contactNameTest);
          actions.resetForm();
        }}
      >
        <Form>
          <FieldContainer>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Jane" />
            <Error name="name" />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="phone">Phone</label>
            <Field
              type="tel"
              id="phone"
              name="phone"
              placeholder="459-12-56XXX"
            />
            <Error name="phone" />
          </FieldContainer>

          <Button type="submit" mode="primary" style={{ marginTop: '12px' }}>
            add contact
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
