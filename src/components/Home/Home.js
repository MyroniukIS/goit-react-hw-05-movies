import * as movieFetch from '../../api/movies-api';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  let updateURL = url === '/' ? 'movie' : url;

  useEffect(() => {
    movieFetch.fetchApiTrending().then(data => setMovies(data.results));
  }, []);
  console.log(movies);
  return (
    <>
      <h1>Trending Movies Today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`${updateURL}/${movie.id}`}
              >{`${movie.original_title}`}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
