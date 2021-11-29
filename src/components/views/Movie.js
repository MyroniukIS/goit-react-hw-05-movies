import { useState, useEffect } from "react";
import { fetchApiSearch } from "../api";
import GetQueryValue from "./GetQueryValue";
import ShowMoviesFromMovie from "../ShowMoviesFromMovie";

export default function Movie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query !== "") {
      fetchApiSearch(query).then((data) => setMovies(data.results));
    }
  }, [query]);

  function handleSubmit(q) {
    setQuery(q);
  }

  return (
    <>
      <h1>Movie</h1>
      <GetQueryValue onSubmit={handleSubmit} />

      {movies && <ShowMoviesFromMovie movies={movies} />}
    </>
  );
}
