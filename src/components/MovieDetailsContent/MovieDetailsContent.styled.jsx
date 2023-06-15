import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;

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
  margin-bottom: 10px;
`;

export const AdditionalInformationContainer = styled.div`
  border-top: 1px solid #b6b5b5;
  border-bottom: 1px solid #b6b5b5;
  padding: 15px;
  margin-bottom: 30px;
`;
