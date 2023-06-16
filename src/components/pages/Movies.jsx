import React, { useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movie');

  useEffect(() => {
    const getSearchMovies = async searchQuery => {
      try {
        setIsLoading(true);
        const response = await searchMovies(searchQuery);

        if (response.results.length === 0) {
          toast.error('No results found');
        } else {
          const transformedMovies = response.results.map(movie => ({
            id: movie.id,
            img: movie.poster_path,
            title: movie.title,
          }));
          setSearchingMovies(transformedMovies);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) getSearchMovies(query);
  }, [query, setSearchParams]);

  const handleFormSubmit = searchQuery => {
    setSearchParams({ movie: searchQuery });
  };

  return (
    <StyledContainer>
      <ToastContainer autoClose={2000} />
      <SearchForm handleSubmit={handleFormSubmit} />
      {isLoading ? <Loader /> : <MoviesList movies={searchingMovies} />}
    </StyledContainer>
  );
};

export default Movies;
