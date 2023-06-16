import React from 'react';

import {
  Wrapper,
  StyledListItem,
  StyledLink,
  StyledImage,
} from './MoviesList.styled';

import placeholderImage from './placeholder.jpg';

export const MoviesList = ({ movies }) => {
  return (
    <Wrapper>
      {movies.map(movie => (
        <StyledListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`}>
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
