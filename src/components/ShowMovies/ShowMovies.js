import { Link, useRouteMatch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from '../ShowMovies/ShowMovies.module.scss';

export default function ShowMovies({ movies }) {
  const location = useLocation();
  const { url } = useRouteMatch();

  let updateURL = url === '/' ? 'movie' : url;

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link
            className={s.link}
            to={{
              pathname: `${updateURL}/${movie.id}`,
              state: { from: location },
            }}
          >
            <div className={s.thumb}>
              <img
                src={
                  movie.poster_path &&
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                alt={movie.title}
              ></img>
            </div>
            <div className={s.thumbDescr}>
              <p className={s.textTitle}>{movie.title}</p>
              <p className={s.textDescr}>{movie.vote_average}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

ShowMovies.propTypes = {
  movies: PropTypes.array,
};
