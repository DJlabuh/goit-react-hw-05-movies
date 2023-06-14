import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieCredits } from '../../services/getMovie';
import { Loader } from '../Loader';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const creditsData = await getMovieCredits(movieId);
        const filteredCast = creditsData.cast.map(actor => ({
          name: actor.name,
          id: actor.id,
          profile_path: actor.profile_path,
          character: actor.character,
        }));
        setCast(filteredCast);
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <ToastContainer autoClose={2000} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>Cast</div>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>Name: {actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
