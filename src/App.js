import { Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import s from './App.module.scss';
import Navigation from './components/Navigation';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./components/views/Home'));
const Movie = lazy(() => import('./components/views/Movie'));
const MovieDetailsPage = lazy(() =>
  import('./components/views/MovieDetailsPage'),
);

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
              <div>
                <div>
                  <Loader />
                </div>
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
                <MovieDetailsPage />
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
