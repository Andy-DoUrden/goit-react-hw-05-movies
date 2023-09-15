import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'tools/fetchTMDB';

import HomeTitle from 'components/HomeTitle';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getTrendingMovies();
      setFilms(response.results);
    })();
  }, []);

  return (
    <>
      <HomeTitle />
      <MoviesList films={films} />
    </>
  );
};

export default Home;
