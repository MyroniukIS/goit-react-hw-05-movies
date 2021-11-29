import { fetchApiCast, fetchApiReviews } from "../api";
import { Route, useParams } from "react-router";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCast from "../MovieCast";
import MovieReviews from "../MovieRewiews";

export default function MovieMoreInfo() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchApiCast(movieId).then((dataCast) => setCast(dataCast.cast));
    fetchApiReviews(movieId).then((dataReviews) =>
      setReviews(dataReviews.results)
    );
  }, [movieId]);

  return (
    <>
      <ul>
        <li>
          {" "}
          <NavLink to={`${url}/cast`}>Cast</NavLink>{" "}
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Route path={`${url}/cast`}>{cast && <MovieCast cast={cast} />}</Route>

      <Route path={`${url}/reviews`}>
        {reviews && <MovieReviews reviews={reviews} />}
      </Route>
    </>
  );
}
