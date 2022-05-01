import s from './contactList.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from '../redux/phonebook/phonebook-selectors';
// import actions from '../redux/phonebook/phonebook-actions';
import { removePhonebook } from '../redux/phonebook/phonebook-operations';

const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  const items = useSelector(state => state.contacts.contacts);
  console.log(items);
  const dispatch = useDispatch();
  // console.log(contacts);
  const removeContacts = id => dispatch(removePhonebook(id));
  // const newItems = contacts(items, filter);

  return (
    <>
      {contacts.map(({ id, name, phone }) => {
        // console.log(contacts);
        return (
          <div key={id}>
            <>
              <p name={name}>
                {name} {phone}
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
