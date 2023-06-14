import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
  width: 70%;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

  &.active {
    color: #f16f6f;
    border-bottom: 1px solid #f16f6f;
  }
  &:hover {
    color: #f16f6f;
  }
`;
