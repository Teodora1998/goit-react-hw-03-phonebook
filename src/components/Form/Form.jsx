import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // Vom face distincția între input-uri după atributul nume
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  //trimitere formular
  handleSubmit = evt => {
    evt.preventDefault();
   // const { name, number } = this.state;
    this.props.onSubmit({ ...this.state }); // Transmiterea datelor catre componenta parinte prin prop-ul onSubmit
    this.reset();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.label}> Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="number" className={css.label}> Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit" className={css.button}> Add contact </button>
        </form>
      </>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
