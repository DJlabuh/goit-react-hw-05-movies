import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  Wrapper,
  StyledListItem,
  StyledLink,
  StyledImage,
} from './MoviesList.styled';

import placeholderImage from './placeholder.jpg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Wrapper>
      {movies.map(movie => (
        <StyledListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <StyledImage
              src={
                movie.img
                  ? `https://image.tmdb.org/t/p/w200${movie.img}`
                  : placeholderImage
              }
              alt={movie.title}
            />
            {movie.title}
          </StyledLink>
        </StyledListItem>
      ))}
    </Wrapper>
  );
};
