import s from './contactForm.css';
import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newName = {
      ...this.state,
      id: shortid.generate(),
    };
    this.props.addContacts(newName);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      ...this.state,
      number: '',
      name: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { onInput, onSubmit } = this;
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
  }
}

export default ContactForm;
