import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesBySearch } from 'tools/fetchTMDB';

import SearchBar from 'components/SearchBar';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState(null);

  useEffect(() => {
    (async () => {
      if (!searchParams.get('query')) {
        setFilms(null);
        return;
      }

      const response = await getMoviesBySearch(searchParams.get('query'));
      setFilms(response.results);
    })();
  }, [searchParams]);

  return (
    <>
      <SearchBar onHandleSubmit={setSearchParams} />
      <MoviesList films={films} />
    </>
  );
};

export default Movies;
