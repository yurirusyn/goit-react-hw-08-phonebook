import s from './contactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContacts }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => {
        return (
          <>
            <p key={id} name={name}>
              {name} {number}
            </p>
            <button onClick={e => removeContacts(id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default ContactList;
