import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background-color: #fcfcfc;
  padding: 20px;
  width: 70%;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const MovieImage = styled.img`
  width: 300px;
`;

export const MovieInfoContainer = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MovieOverview = styled.p`
  margin-bottom: 32px;
`;

export const MovieInfoSpan = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const MovieInfo = styled.p`
  margin-bottom: 5px;
`;
