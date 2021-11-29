import { useState, useEffect } from 'react';
import { fetchApiSearch } from '../api';
import GetQueryValue from './GetQueryValue';
import ShowMovies from '../ShowMovies/ShowMovies';
import s from '../views/Movie.module.scss';

export default function Movie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query !== '') {
      fetchApiSearch(query).then(data => setMovies(data.results));
    }
  }, [query]);

  function handleSubmit(inputQuery) {
    setQuery(inputQuery);
  }

  return (
    <>
      <h1>Movies</h1>
      <GetQueryValue onSubmit={handleSubmit} />

      {movies ? (
        <ShowMovies movies={movies} />
      ) : (
        <p className={s.textAlert}>Please, enter your query!!!</p>
      )}
    </>
  );
}
