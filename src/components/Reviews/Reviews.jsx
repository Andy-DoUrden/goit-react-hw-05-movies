import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import { ReviewContainer, ReviewTitle, ReviewText } from './Reviews.styled';

import { getMovieReviews } from 'tools/fetchTMDB';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getMovieReviews(movieId);
      setReviewsData(response.results);
    })();
  }, [movieId]);

  if (!reviewsData) {
    return;
  }

  return (
    <>
      {reviewsData.length !== 0 ? (
        reviewsData.map(review => (
          <ReviewContainer key={shortid.generate()}>
            <ReviewTitle>{review.author}</ReviewTitle>

            <ReviewText>{review.content}</ReviewText>
          </ReviewContainer>
        ))
      ) : (
        <ReviewText>We don't have reviews for this movie.</ReviewText>
      )}
    </>
  );
};

export default Reviews;
