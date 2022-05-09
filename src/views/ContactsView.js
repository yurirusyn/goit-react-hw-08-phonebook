import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { getPhonebook } from '../components/redux/phonebook/phonebook-operations';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPhonebook()), [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
