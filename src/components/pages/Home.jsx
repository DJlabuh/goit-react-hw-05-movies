import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovies } from '../../services/getMovie';
import { Loader } from '../Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        const simplifiedMovies = data.results.map(movie => ({
          id: movie.id,
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
    <div>
      <h2>Trending today</h2>
      <ToastContainer autoClose={2000} />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
