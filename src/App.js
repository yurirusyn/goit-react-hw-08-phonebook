import { useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { getPhonebook } from '../src/components/redux/phonebook/phonebook-operations';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatc = useDispatch();
  useEffect(() => {
    dispatc(getPhonebook());
  }, []);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default App;
