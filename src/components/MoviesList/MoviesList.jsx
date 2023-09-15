import { useLocation } from 'react-router-dom';

import shortid from 'shortid';

import { Container, Film, NoFilmsMessage } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  if (!films) {
    return;
  }

  return (
    <Container>
      {films.length !== 0 ? (
        films.map(film => (
          <Film
            key={shortid.generate()}
            to={`/movies/${film.id}`}
            state={{ from: location }}
          >
            {film.title ?? film.name}
          </Film>
        ))
      ) : (
        <NoFilmsMessage>
          Sorry, we don't have any movies with that name.
        </NoFilmsMessage>
      )}
    </Container>
  );
};

export default MoviesList;
