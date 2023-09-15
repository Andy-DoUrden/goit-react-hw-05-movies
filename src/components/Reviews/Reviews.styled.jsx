import styled from '@emotion/styled';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 600px;
  padding: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const ReviewTitle = styled.h2`
  margin: 0 auto;

  font-size: 24px;
  font-weight: bold;

  color: #f2ab26;
`;

const ReviewText = styled.p`
  margin: 0 auto;

  font-size: 20px;
  text-align: justify;

  color: #f2ab26;
`;

export { ReviewContainer, ReviewTitle, ReviewText };
