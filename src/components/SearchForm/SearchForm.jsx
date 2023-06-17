import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Input, Button } from './SearchForm.styled.component';

export const SearchForm = ({ handleSubmit }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('movie') ?? ''
  );

  const handleFormSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error(
        'Empty search query. Please enter a valid search term in the search field.'
      );
      return;
    }

    handleSubmit(searchQuery.trim());
    setSearchQuery('');
  };

  const handleChange = evt => {
    setSearchQuery(evt.target.value);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Enter movie"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
