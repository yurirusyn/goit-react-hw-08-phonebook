import axios from 'axios';

axios.defaults.baseURL = 'https://62160e807428a1d2a3598008.mockapi.io/';

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
