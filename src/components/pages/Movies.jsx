import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../Loader';
import { StyledContainer } from './Movies.styled';
import { searchMovies } from '../../services/getMovie';
import { SearchForm } from '../SearchForm';
import { MoviesList } from '../MoviesList';

const Movies = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async event => {
    event.preventDefault();

    const query = event.target.elements[0].value.trim();

    if (query === '') {
      toast.error('Please enter a movie title');
      return;
    }

    try {
      setIsLoading(true);
      const response = await searchMovies(query);

      if (response.results.length === 0) {
        toast.error('No results found');
        setSearchParams({ query: '' });
        event.target.reset();
      } else {
        const transformedMovies = response.results.map(movie => ({
          id: movie.id,
          img: movie.poster_path,
          title: movie.title,
        }));
        setSearchingMovies(transformedMovies);
        setSearchParams({ film: query });
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = event => {
    setSearchParams({ query: event.target.value });
  };

  return (
    <StyledContainer>
      <ToastContainer autoClose={2000} />
      <SearchForm
        handleSubmit={handleFormSubmit}
        value={searchParams.get('query') || ''}
        handleChange={handleInputChange}
      />
      {isLoading ? <Loader /> : <MoviesList movies={searchingMovies} />}
    </StyledContainer>
  );
};

export default Movies;
