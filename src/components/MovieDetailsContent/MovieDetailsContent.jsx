import React from 'react';
import {
  MovieDetailsContainer,
  MovieImage,
  MovieInfoContainer,
  MovieTitle,
  MovieOverview,
  MovieInfoSpan,
  MovieInfo,
} from './MovieDetailsContent.styled';

export const MovieDetailsContent = ({ movie }) => {
  return (
    <MovieDetailsContainer>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieInfoContainer>
        <MovieInfo>
          <MovieInfoSpan>User Score:</MovieInfoSpan> {movie.vote_average}
        </MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverview>{movie.overview}</MovieOverview>
        <MovieInfo>
          <MovieInfoSpan>Release Date:</MovieInfoSpan> {movie.release_date}
        </MovieInfo>
        <MovieInfo>
          <MovieInfoSpan>Genres:</MovieInfoSpan>
          {movie.genres.map(genre => genre.name).join(', ')}
        </MovieInfo>
      </MovieInfoContainer>
    </MovieDetailsContainer>
  );
};

export default MovieDetailsContent;
