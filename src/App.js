import { Component } from 'react/cjs/react.production.min';
import shortid from 'shortid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = task => {
    const searchSameName = this.state.contacts
      .map(cont => cont.name)
      .includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        ...task,
        id: shortid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  filtercontacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  searchInputChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  removeContacts = id =>
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  render() {
    const { addContacts, filtercontacts, removeContacts } = this;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContacts={addContacts} />
        <h2>Contacts</h2>
        <Filter addFilter={this.state.filter} change={this.searchInputChange} />
        <ContactList
          contacts={filtercontacts()}
          removeContacts={removeContacts}
        />
      </>
    );
  }
}
export default App;
