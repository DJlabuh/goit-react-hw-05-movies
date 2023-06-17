import styled from 'styled-components';

export const CastList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastListItem = styled.li`
  width: 250px;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const CastImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const CastName = styled.p`
  font-weight: bold;
`;

export const CastCharacter = styled.p`
  color: #888;
  margin: 0 0 40px 0;
`;
