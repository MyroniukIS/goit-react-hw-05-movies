import { useLocation, useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { fetchApiMore } from '../api/api';
import MovieMoreInfo from '../MovieMoreInfo';

export default function MovieDetails() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  function goBack() {
    history.push(location?.state?.from ?? '/');
  }

  useEffect(() => {
    fetchApiMore(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={goBack}>
            go back
          </button>
          <div className="card-container">
            <div className="{s.thumb}">
              <img
                src={
                  movie.poster_path &&
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                alt={movie.title}
                width="450"
              ></img>
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.popularity}</p>
              <p>{movie.overview}</p>
            </div>
          </div>

          <div>
            <h3>Additional information</h3>
            <MovieMoreInfo />
          </div>
        </>
      )}
    </>
  );
}
