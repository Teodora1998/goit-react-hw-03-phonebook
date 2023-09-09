import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FilterContacts.module.css';

export class FilterContacts extends Component {
  state = {
    searchTerm: '',
  };
  // constructor(){
  //     super()
  // }
  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchTerm: value });
    this.props.onFilter(value); // Transmiterea catre componenta parinte prin prop-ul onFilter
  };
  render = () => {
    return (
      <>
        <h3 className={css.info}>Find contacts by name</h3>
        <label className={css.labelFilter}>
          <input
            type="text"
            className={css.filterInput}
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  };
}

FilterContacts.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
