import css from './Modal.module.css';

const Modal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete contact?</p>
        <div className={css.buttonContainer}>
          <button className={css.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={css.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;