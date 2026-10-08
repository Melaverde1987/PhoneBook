import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/api';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoading && <div>'Request in progress...'</div>}
      <main>
        <h1>My contacts</h1>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
        <ContactForm />
      </main>
    </>
  );
}
