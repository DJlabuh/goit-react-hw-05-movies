import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMovieReviews } from '../../services/getMovie';

import { Loader } from '../Loader';
import { ReviewList, ReviewItem, Author } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        const filteredReviews = reviewsData.results.map(review => ({
          id: review.id,
          author: review.author,
          content: review.content,
        }));
        setReviews(filteredReviews);
      } catch (error) {
        toast.error(`Ошибка: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ToastContainer autoClose={2000} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {reviews.length > 0 ? (
            <ReviewList>
              {reviews.map(review => (
                <ReviewItem key={review.id}>
                  <Author>Author: {review.author}</Author>
                  <p>{review.content}</p>
                </ReviewItem>
              ))}
            </ReviewList>
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </>
      )}
    </>
  );
};
