import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.css';

const Filter = ({ filterValue, change }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.filter_input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filterValue}
        onChange={change}
      />
    </label>
  );
};
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;

// import s from './filter.css';
// import PropTypes from 'prop-types';
// import { Component } from 'react/cjs/react.production.min';
// import shortid from 'shortid';

// class Filter extends Component {
//   state = {
//     name: '',
//   };

//   //   onInput = e => {
//   //     const { name, value } = e.target;
//   //     this.setState({ [name]: value });
//   //     const newNameFilter = {
//   //       ...this.state,
//   //     };
//   //     this.props.addFilter(newNameFilter);
//   //   };

//   //   onFiter = () => {
//   //     const newNameFilter = {
//   //       ...this.state,
//   //     };
//   //     this.props.addFilter(newNameFilter);
//   //   };

//   render() {
//     const { name } = this.state;
//     return (
//       <label>
//         <span>Name</span>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           name="name"
//           value={name}
//           onChange={this.onInput}
//           autoComplete="off"
//         />
//       </label>
//     );
//   }
// }

// export default Filter;
