import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import {
  CastContainer,
  CastImageContainer,
  CastImage,
  CastText,
} from './Cast.styled';

import { getMovieCredits } from 'tools/fetchTMDB';

const Cast = () => {
  const [castData, setCastData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getMovieCredits(movieId);
      setCastData(response);
    })();
  }, [movieId]);

  if (!castData) {
    return;
  }

  return (
    <>
      {castData.cast.map(caster => (
        <CastContainer key={shortid.generate()}>
          <CastImageContainer>
            <CastImage
              src={
                caster.profile_path
                  ? `https://image.tmdb.org/t/p/original${caster.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
            />
          </CastImageContainer>

          <CastText>{caster.name}</CastText>
        </CastContainer>
      ))}
    </>
  );
};

export default Cast;
