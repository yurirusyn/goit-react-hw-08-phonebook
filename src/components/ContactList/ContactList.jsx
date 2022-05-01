import { useDispatch, useSelector } from 'react-redux';
import { removePhonebook } from '../redux/phonebook/phonebook-operations';

const filterContact = (items, filter) => {
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const removeContacts = id => dispatch(removePhonebook(id));
  const items = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const newItems = filterContact(items, filter);
  console.log(newItems);

  return (
    <>
      {newItems.map(({ id, name, phone }) => {
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
