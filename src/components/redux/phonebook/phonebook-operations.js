import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPhonebookApi,
  getPhonebookApi,
  removePhonebookApi,
} from '../../../services/phonebookApi';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const addPhonebook = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkApi) => {
    try {
      console.log(newContact);
      const contacts = await addPhonebookApi(newContact);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getPhonebook = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const contacts = await getPhonebookApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const removePhonebook = createAsyncThunk(
  'contacts/remove',
  async (id, thunkApi) => {
    try {
      await removePhonebookApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
