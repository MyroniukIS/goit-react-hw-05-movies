import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../views/GetQueryValue.module.scss';

export default function GetQueryValue({ onSubmit }) {
  const [query, setQuery] = useState('');

  function getQuery(e) {
    setQuery(e.currentTarget.value.toLowerCase());
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Enter your query!!!');
    }

    onSubmit(query);
    setQuery('');
  }

  return (
    <form className={s.form} onSubmit={HandleSubmit}>
      <label>
        <p className={s.text}>SEARCH MOVIE</p>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          value={query}
          onChange={getQuery}
        ></input>
      </label>
      <button className={s.btn} type="submit">
        FIND
      </button>
    </form>
  );
}

GetQueryValue.propTypes = {
  onSubmit: PropTypes.func,
};
