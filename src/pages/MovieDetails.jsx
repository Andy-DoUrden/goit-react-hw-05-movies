import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieInfo from 'components/MovieInfo';

import { getMovieById } from 'tools/fetchTMDB';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getMovieById(movieId);
      setMovie(response);
    })();
  }, [movieId]);

  return (
    <>
      <MovieInfo data={movie} />
    </>
  );
};

export default MovieDetails;
