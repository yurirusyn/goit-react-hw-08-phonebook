import { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import {
  addPhonebookApi,
  getPhonebookApi,
  removePhonebookApi,
} from '../src/services/phonebookApi.js';
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
