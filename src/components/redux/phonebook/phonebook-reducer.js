import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from '../phonebook/phonebook-actions';

const defiltContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer(defiltContacts, {
  [actions.addContacts]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filter]: (_, { payload }) => payload,
});

const phonebook = combineReducers({
  contacts,
  filter,
});
export default phonebook;
