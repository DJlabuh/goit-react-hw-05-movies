import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieById } from '../../services/getMovie';
import { Loader } from '../Loader';
import { MovieDetailsContent } from '../MovieDetailsContent';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <div>
      <ToastContainer autoClose={2000} />
      {isLoading ? <Loader /> : <MovieDetailsContent movie={movie} />}
    </div>
  );
};

export default MovieDetails;
