import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMovies } from '../../services/getMovie';

import { Loader } from '../Loader';
import { MoviesList } from '../MoviesList';
import { StyledContainer, StyledHeading } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        const simplifiedMovies = data.results.map(movie => ({
          id: movie.id,
          img: movie.poster_path,
          title: movie.title || movie.name,
        }));
        setMovies(simplifiedMovies);
        setIsLoading(false);
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <StyledContainer>
      <StyledHeading>Trending today</StyledHeading>
      <ToastContainer autoClose={2000} />
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </StyledContainer>
  );
};

export default Home;
