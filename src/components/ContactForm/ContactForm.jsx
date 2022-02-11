import s from './contactForm.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useRef, useState } from 'react';
const ContactForm = ({ addContacts }) => {
  // state = {
  //   name: '',
  //   number: '',
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInput = e => {
    const { name, value } = e.target;
    // this.setState({ [name]: value });

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const newName = {
      name,
      number,
      id: shortid.generate(),
    };
    addContacts(newName);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={onInput}
          autoComplete="off"
        />
      </label>
      <label>
        <span>Tel</span>
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="Enter Tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          onChange={onInput}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
