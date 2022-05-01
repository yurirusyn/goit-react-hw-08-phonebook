import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/phonebook/phonebook-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const searchInputChange = text => {
    dispatch(actions.filter(text));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={e => searchInputChange(e.target.value)}
      />
    </label>
  );
};

export default Filter;
