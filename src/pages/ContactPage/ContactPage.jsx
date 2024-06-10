import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import ContactList from "../../components/ContactList/ContactList"
import ContactForm from "../../components/ContactForm/ContactForm"
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';

export default function ContactPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Your contacts</DocumentTitle>
            <ContactForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactList />
        </>
    );
}