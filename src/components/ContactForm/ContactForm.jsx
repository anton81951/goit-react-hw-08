import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import clsx from 'clsx';
import { addContact, updateContact } from '../../redux/contacts/operations';
import { HiUser, HiPhone } from 'react-icons/hi';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactForm = ({ currentContact, setCurrentContact }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentContact) {
      setInitialValues(currentContact);
    }
  }, [currentContact]);

  const setInitialValues = (contact) => ({
    name: contact.name,
    number: contact.number,
  });

  const handleSubmit = (values, actions) => {
    const contactData = {
      name: values.name,
      number: values.number,
    };
    if (currentContact && currentContact.id) {
      dispatch(updateContact({ id: currentContact.id, contactData }));
      setCurrentContact(null);
    } else {
      dispatch(addContact(contactData));
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className={styles.inputForm}>
          {errors.name && touched.name && <span className={styles.errorMsg}>{errors.name}</span>}
          <div className={styles.inputSection}>
            <div className={clsx(styles.nameBox)}>
              <HiUser />
              <label htmlFor="name">Name</label>
            </div>
            <Field className={styles.inputField} type="text" name="name" id="name" />
          </div>
          {errors.number && touched.number && <span className={styles.errorMsg}>{errors.number}</span>}
          <div className={styles.inputSection}>
            <div className={clsx(styles.nameBox)}>
              <HiPhone />
              <label htmlFor="number">Number</label>
            </div>
            <Field className={styles.inputField} type="text" name="number" id="number" />
          </div>
          <button className={styles.inputBtn} type="submit">
            {currentContact ? 'Update Contact' : 'Add Contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;