import React from 'react';
import { Form, Input, Button } from './SearchForm.styled.component';

export const SearchForm = ({ handleSubmit, value, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter movie"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
