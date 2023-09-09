import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contacts__list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contacts__item}>{contact.name.split(' ').map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' ')} : {contact.number}
          <button className={css.button} type="button" onClick={() => { deleteContact(contact.id);}} > Delete </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
