import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const StyledImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;
