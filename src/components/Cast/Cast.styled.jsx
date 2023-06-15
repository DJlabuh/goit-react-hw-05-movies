import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CastImage = styled.img`
  width: 90%;
  height: auto;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CastName = styled.p`
  font-weight: bold;
`;

export const CastCharacter = styled.p`
  color: #888;
  margin: 0 0 40px 0;
`;
