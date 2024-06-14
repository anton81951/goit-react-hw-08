import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = ({ setCurrentContact }) => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsOrder}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onEdit={setCurrentContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;