import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.css';
import { useDispatch } from 'react-redux';
import { getFilter } from '../redux/phonebook/phonebook-selectors';
import { useSelector } from 'react-redux';
import actions from '../redux/phonebook/phonebook-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filterR = useSelector(getFilter);

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
        value={filterR}
        onChange={e => searchInputChange(e.target.value)}
      />
    </label>
  );
};

// Filter.propTypes = {
//   addFilter: PropTypes.string.isRequired,
//   change: PropTypes.func.isRequired,
// };

export default Filter;
