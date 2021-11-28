import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Home from './components/Home/Home';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>

      {/* <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Switch> */}
    </>
  );
}
