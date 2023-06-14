import React from 'react';
import { Link } from 'react-router-dom';
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
    <>
      <MovieDetailsContainer>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieInfoContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieInfo>
            <MovieInfoSpan>User Score:</MovieInfoSpan> {movie.vote_average}
          </MovieInfo>
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
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsContent;
