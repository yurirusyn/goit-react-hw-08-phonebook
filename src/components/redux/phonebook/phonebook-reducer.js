import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from '../phonebook/phonebook-actions';
import {
  getPhonebook,
  addPhonebook,
  removePhonebook,
} from '../phonebook/phonebook-operations';

const contacts = createReducer([], {
  [getPhonebook.fulfilled]: (_, { payload }) => payload,
  [addPhonebook.fulfilled]: (state, { payload }) => [...state, payload],
  [removePhonebook.fulfilled]: (state, { payload }) =>
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
