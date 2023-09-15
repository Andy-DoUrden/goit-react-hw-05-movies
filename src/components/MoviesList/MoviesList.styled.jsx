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

const Film = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 600px;
  padding: 10px;
  padding-bottom: 14px;

  background-color: #332b00;
  border-radius: 16px;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #003300;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

const NoFilmsMessage = styled.h2`
  margin: 0 auto;

  font-size: 24px;
  font-weight: bold;

  color: #f2ab26;
`;

export { Container, Film, NoFilmsMessage };
