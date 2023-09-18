import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 800px;
  padding: 20px;
  margin-top: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const GoBackLink = styled(Link)`
  width: 200px;
  margin: 0 auto;
  padding: 10px;

  font-size: 20px;
  text-decoration: none;
  text-align: center;

  color: #f2ab26;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;

  transition: 300ms;

  :hover {
    background-color: #290000;
    border: 2px solid #c81a00;
    color: #c81a00;
  }
`;

const MovieImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
  overflow: hidden;
`;

const MovieImage = styled.img`
  display: block;
  max-width: 400px;
  max-height: 400px;
`;

const Title = styled.h1`
  margin: 0 auto;

  font-size: 42px;
  font-weight: bold;

  color: #f2ab26;
`;

const Rating = styled.p`
  margin: 0 auto;

  font-size: 20px;

  color: #f2ab26;
`;

const OverviewTitle = styled.h2`
  margin: 0 auto;

  font-size: 24px;
  font-weight: bold;

  color: #f2ab26;
`;

const OverviewText = styled.p`
  margin: 0 auto;

  font-size: 20px;
  text-align: justify;

  color: #f2ab26;
`;

const GenresTitle = styled.h2`
  margin: 0 auto;

  font-size: 24px;
  font-weight: bold;

  color: #f2ab26;
`;

const GenresText = styled.p`
  margin: 0 auto;

  font-size: 20px;

  color: #f2ab26;
`;

const AdditionalInfoTitle = styled.h2`
  margin: 0 auto;

  font-size: 24px;
  font-weight: bold;

  color: #f2ab26;
`;

const AdditionalInfoLink = styled.button`
  width: 200px;
  margin: 0 auto;
  padding: 10px;

  font-size: 20px;
  text-decoration: none;
  text-align: center;

  color: #f2ab26;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;

  transition: 300ms;
  cursor: pointer;

  :hover {
    background-color: #003300;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export {
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
};
