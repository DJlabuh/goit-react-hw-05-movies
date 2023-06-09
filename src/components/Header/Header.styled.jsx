import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: #333;

  &:hover {
    background-color: #ccc;
  }
`;
