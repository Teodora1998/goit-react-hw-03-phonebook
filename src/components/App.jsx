import css from './App.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './Filter/FilterContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Dobby Potter', number: '327-61-55' },
    ],
    filter: '',
  };

  //citire LS
  componentDidMount() {
    const contactStorage = localStorage.getItem('contacts');
    if (contactStorage) {
      this.setState({ contacts: JSON.parse(contactStorage) });
    }
  }

  //update LS
  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  handleSubmit = newContact => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      };
      this.setState({ contacts: [...contacts, contact] });
    }
  };
  handleFilter = term => {
    this.setState({ filter: term });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    return (
      <div className={css.form__container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 className={css.subtitle}>Contacts</h2>
        <FilterContacts onFilter={this.handleFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
