import { Route, Switch } from 'react-router';
import React, { lazy, Suspense } from 'react';
import s from './App.module.scss';
import Navigation from './components/Navigation';

const Home = lazy(() => import('./components/views/Home'));
const Movie = lazy(() => import('./components/views/Movie'));
const MovieDetails = lazy(() => import('./components/views/MovieDetails'));

function App() {
  return (
    <>
      <div className={s.header}>
        <Navigation />
      </div>

      <div className={s.section}>
        <div className={s.container}>
          <Suspense
            fallback={
              <div className={s.loader}>
                <div>Loading...</div>
              </div>
            }
          >
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/movie" exact>
                <Movie />
              </Route>

              <Route path="/movie/:movieId">
                <MovieDetails />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
