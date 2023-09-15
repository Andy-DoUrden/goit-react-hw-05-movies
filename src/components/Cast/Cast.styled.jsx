import styled from '@emotion/styled';

const CastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 600px;
  padding: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const CastImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
  overflow: hidden;
`;

const CastImage = styled.img`
  display: block;
  max-width: 150px;
  max-height: 150px;
`;

const CastText = styled.p`
  margin: 0 auto;

  font-size: 20px;

  color: #f2ab26;
`;

export { CastContainer, CastImageContainer, CastImage, CastText };
