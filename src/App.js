import { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const contact = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) || contact;
  });

  const addContacts = task => {
    const searchSameName = contacts.map(cont => cont.name).includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        ...task,
        id: shortid(),
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  const filtercontacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const searchInputChange = event => {
    setFilter(event.currentTarget.value);
  };

  const removeContacts = id =>
    setContacts(prev => prev.filter(el => el.id !== id));

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({
  //       contacts: parsedContacts,
  //     });
  //   }
  // }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter addFilter={filter} change={searchInputChange} />
      <ContactList
        contacts={filtercontacts()}
        removeContacts={removeContacts}
      />
    </>
  );
};
export default App;
