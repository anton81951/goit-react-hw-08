import { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import styles from './Contact.module.css';
import { HiUser, HiPhone } from 'react-icons/hi';
import Modal from '../Modal/Modal';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ contact, onEdit }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={clsx(styles.contactContainer)}>
      <address>
        <div className={clsx(styles.nameBox)}>
          <HiUser />
          <span className={clsx(styles.nameSize)}>{contact.name}</span>
        </div>
        <div className={clsx(styles.nameBox)}>
          <HiPhone />
          <span className={clsx(styles.nameSize)}>{contact.number}</span>
        </div>
      </address>
      <form className={clsx(styles.buttonBox)}>
        <button
          type="button"
          className={clsx(styles.buttonFrame)}
          onClick={() => onEdit(contact)}
          aria-label={`Edit ${contact.name}`}
        >
          Edit
        </button>
        <button
          type="button"
          className={clsx(styles.buttonFrame)}
          onClick={openModal}
          aria-label={`Delete ${contact.name}`}
        >
          Delete
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Contact;