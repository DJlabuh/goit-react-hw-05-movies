import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieCredits } from '../../services/getMovie';
import { Loader } from '../Loader';
import {
  CastList,
  CastListItem,
  CastImage,
  CastName,
  CastCharacter,
} from './Cast.styled';
import placeholderImage from './person-placeholder.jpg';

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
        toast.error(`Ошибка: ${error.message}`);
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
        <CastList>
          {cast.map(actor => (
            <CastListItem key={actor.id}>
              <CastImage
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : placeholderImage
                }
                alt={actor.name}
              />
              <CastName>{actor.name}</CastName>
              <CastCharacter>Character: {actor.character}</CastCharacter>
            </CastListItem>
          ))}
        </CastList>
      )}
    </>
  );
};
