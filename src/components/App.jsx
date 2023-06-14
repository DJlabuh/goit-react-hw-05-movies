import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'components/pages/Home';
import Movies from 'components/pages/Movies';
import MovieDetails from 'components/pages/MovieDetails';
import Layout from './Layout/Layout';
import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
