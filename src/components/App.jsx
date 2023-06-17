import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews';

const Home = lazy(() => import('components/pages/Home'));
const Movies = lazy(() => import('components/pages/Movies'));
const MovieDetails = lazy(() => import('components/pages/MovieDetails'));

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
