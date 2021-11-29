import { useState } from "react";
import PropTypes from "prop-types";

export default function GetQueryValue({ onSubmit }) {
  const [query, setQuery] = useState("");

  function getQuery(e) {
    const lowerCase = e.currentTarget.value.toLowerCase();
    setQuery(lowerCase);
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (query.trim() === "") {
      return alert("Введи что-то");
    }

    onSubmit(query);
    clear();
  }

  function clear() {
    setQuery("");
  }

  return (
    <form onSubmit={HandleSubmit}>
      <label>
        <span>Search movie</span>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={getQuery}
        ></input>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

GetQueryValue.propTypes = {
  onSubmit: PropTypes.func,
};
