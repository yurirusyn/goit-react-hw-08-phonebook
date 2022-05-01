import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebook from '../redux/phonebook/phonebook-reducer';

export const store = configureStore({
  reducer: {
    contacts: phonebook,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
