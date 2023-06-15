import React, { useState } from 'react';
import { StyledContainer } from './Movies.styled';
import { searchMovies } from '../../services/getMovie';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const response = await searchMovies(searchQuery);
      setSearchResults(response.results);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Введите название фильма"
        />
        <button type="submit">Найти</button>
      </form>

      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default Movies;
