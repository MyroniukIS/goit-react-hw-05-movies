import { fetchApiCast, fetchApiReviews } from '../api';
import { Route, useParams } from 'react-router-dom';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieCast from '../MovieCast';
import MovieReviews from '../MovieRewiews';
import s from '../MovieMoreInfo/MovieMoreInfo.module.scss';

export default function MovieMoreInfo() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchApiCast(movieId).then(data => setCast(data.cast));
    fetchApiReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      <div className={s.thumb}>
        <ul className={s.list}>
          <li className={s.listItem}>
            {' '}
            <NavLink
              className={s.link}
              activeClassName={s.listItemActive}
              to={`${url}/cast`}
            >
              Cast
            </NavLink>{' '}
          </li>
          <li className={s.listItem}>
            <NavLink
              className={s.link}
              activeClassName={s.listItemActive}
              to={`${url}/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Route path={`${url}/cast`}>
        {cast ? <MovieCast cast={cast} /> : <p>No Information</p>}{' '}
      </Route>

      <Route path={`${url}/reviews`}>
        {reviews ? <MovieReviews reviews={reviews} /> : <p>No Information</p>}{' '}
      </Route>
    </>
  );
}
