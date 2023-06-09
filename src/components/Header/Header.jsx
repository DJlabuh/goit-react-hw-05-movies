import React from 'react';
import {
  HeaderContainer,
  List,
  ListItem,
  StyledNavLink,
} from './Header.styled';

const HeaderPage = () => {
  return (
    <HeaderContainer>
      <nav>
        <List>
          <ListItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </ListItem>
        </List>
      </nav>
    </HeaderContainer>
  );
};

export default HeaderPage;
