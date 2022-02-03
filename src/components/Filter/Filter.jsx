import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.css';

const Filter = ({ addFilter, change }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={addFilter}
        onChange={change}
      />
    </label>
  );
};

Filter.propTypes = {
  addFilter: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;
