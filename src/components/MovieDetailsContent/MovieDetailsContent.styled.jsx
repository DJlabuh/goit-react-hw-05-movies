import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background-color: #fcfcfc;
  padding: 20px;
  width: 85%;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MovieImage = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MovieInfoContainer = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
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
