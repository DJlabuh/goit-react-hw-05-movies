import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieById } from '../../services/getMovie';
import { Loader } from '../Loader';
import { MovieDetailsContent } from '../MovieDetailsContent';
import { BackLink } from '../BackLink';
import { StyledContainer } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <StyledContainer>
      <ToastContainer autoClose={2000} />
      <BackLink to={backLinkHref.current}>Back</BackLink>
      {isLoading ? <Loader /> : <MovieDetailsContent movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default MovieDetails;
