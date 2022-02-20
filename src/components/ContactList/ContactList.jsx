import s from './contactList.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from '../redux/phonebook/phonebook-selectors';
import actions from '../redux/phonebook/phonebook-actions';
const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const removeContacts = id => dispatch(actions.deleteContact(id));

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
