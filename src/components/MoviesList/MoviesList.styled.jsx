import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledListItem = styled.li`
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

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
