import { List, ListItem, Name } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/api';
import { Button } from 'components/Button/Button';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  const handleDelete = evt => dispatch(deleteContact(evt.target.id));

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            <Name>{contact.name}: </Name>
            <span>{contact.number}</span>
          </p>

          <Button
            type="button"
            id={contact.id}
            mode="outline"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
