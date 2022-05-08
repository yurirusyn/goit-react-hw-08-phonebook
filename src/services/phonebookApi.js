import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addPhonebookApi = contact => {
  return axios
    .post('/contacts', contact)
    .then(({ data }) => data)
    .catch(err => err);
};

export const getPhonebookApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(err => err);
};

export const removePhonebookApi = id => {
  return axios
    .delete(`contacts/${id}`)
    .then(() => id)
    .catch(err => err);
};
