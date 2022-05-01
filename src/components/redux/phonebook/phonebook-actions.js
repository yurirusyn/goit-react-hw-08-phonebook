import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('phonebook/add', contact => ({
  payload: contact,
}));

const deleteContact = createAction('phonebook/delete');

const filter = createAction('todos/filter');

const contactsActions = { addContacts, deleteContact, filter };

export default contactsActions;
