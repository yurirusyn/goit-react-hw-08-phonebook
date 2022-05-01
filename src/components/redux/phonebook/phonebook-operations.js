import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPhonebookApi,
  getPhonebookApi,
  removePhonebookApi,
} from '../../../services/phonebookApi';
import { createAction } from '@reduxjs/toolkit';
// import contactsActions from '../phonebook/phonebook-actions';

const addPhonebookRequest = createAction('todos/addPhonebookRequest');
const addPhonebookSuccess = createAction('todos/addPhonebookSuccess');
const addPhonebookError = createAction('todos/addPhonebookError');

// export const addPhonebook = contact => dispatch => {
//   dispatch(addPhonebookRequest()); // {type: "addTodoRequest" }

//   addPhonebookApi(contact)
//     .then(data => dispatch(addPhonebookSuccess(data)))
//     .catch(err => dispatch(addPhonebookError(err.message)));
// };

export const addPhonebook = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkApi) => {
    try {
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
    //   console.log("thunkApi :>> ", thunkApi);
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
