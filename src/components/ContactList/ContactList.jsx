import s from './contactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContacts }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <div key={id}>
            <>
              <p name={name}>
                {name} {number}
              </p>
              <button onClick={e => removeContacts(id)}>Delete</button>
            </>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContacts: PropTypes.func.isRequired,
};
