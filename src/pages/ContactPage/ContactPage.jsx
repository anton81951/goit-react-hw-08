import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import css from "./ContactPage.module.css";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [currentContact, setCurrentContact] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.order}>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
      <SearchBox />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList setCurrentContact={setCurrentContact} />
    </div>
  );
}