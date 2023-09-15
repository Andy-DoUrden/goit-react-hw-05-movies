import { useRef, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import {
  Container,
  GoBackLink,
  MovieImageContainer,
  MovieImage,
  Title,
  Rating,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresText,
  AdditionalInfoTitle,
  AdditionalInfoLink,
} from './MovieInfo.styled';

const MovieInfo = ({ data }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  if (!data) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = data;

  return (
    <Container>
      <GoBackLink to={backLinkLocationRef.current}>Go back</GoBackLink>

      <MovieImageContainer>
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
          }
        />
      </MovieImageContainer>

      <Title>{title}</Title>

      <Rating>User score: {vote_average.toFixed(1) * 10 + '%'}</Rating>

      <OverviewTitle>Overview</OverviewTitle>

      <OverviewText>{overview}</OverviewText>

      <GenresTitle>Genres</GenresTitle>

      <GenresText>{`${genres.map(genre => genre.name).join(' ')}`}</GenresText>

      <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>

      <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>

      <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>

      <Suspense
        fallback={
          <Oval
            height={40}
            width={40}
            color="#f2ab26"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#f2ab26"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieInfo;
