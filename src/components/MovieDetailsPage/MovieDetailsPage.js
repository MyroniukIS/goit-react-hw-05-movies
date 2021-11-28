import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieFetch from '../../api/movies-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieFetch.fetchApiOneMovie(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <div>
        <div>
          <img
            src={
              movie.poster_path &&
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
            alt={movie.title}
            width="300"
          ></img>
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.popularity}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}
