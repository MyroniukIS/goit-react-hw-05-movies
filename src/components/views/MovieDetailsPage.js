import { useLocation, useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { fetchApiDetails } from '../api/api';
import MovieMoreInfo from '../MovieMoreInfo';
import s from '../views/MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  function Back() {
    history.push(location?.state?.from ?? '/');
  }

  useEffect(() => {
    fetchApiDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <button className={s.btn} type="button" onClick={Back}>
            BACK
          </button>
          <div className={s.container}>
            <div className={s.thumb}>
              <img
                className={s.img}
                src={
                  movie.poster_path &&
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                alt={movie.title}
                width="450"
              ></img>
            </div>
            <div className={s.thumbDescr}>
              <h2>{movie.title}</h2>
              <p>{movie.popularity}</p>
              <p>{movie.overview}</p>
            </div>
          </div>

          <div>
            <h2>Additional information</h2>
            <MovieMoreInfo />
          </div>
        </>
      )}
    </>
  );
}
