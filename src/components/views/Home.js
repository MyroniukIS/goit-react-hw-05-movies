import { useEffect, useState } from 'react';
import ShowMovies from '../ShowMovies/ShowMovies';
import { fetchApiTrending } from '../api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchApiTrending().then(data => setMovies(data.results));
  }, []);

  console.log(movies);
  return (
    <>
      <h1>Trending Today</h1>
      {movies && <ShowMovies movies={movies} />}
    </>
  );
}
