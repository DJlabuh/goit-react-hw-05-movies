import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = 'en-US';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTIwYzliZWMwOWE4MTJiYzM2YzNiNTNlOWU5ZjNlNSIsInN1YiI6IjY0ODM3NmJmYzlkYmY5MDBjNTcxMWJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8YvYBh5kr88uuL-CjfWLbM4Y1pFnOV1o1eMa5ZNh3Q4',
  },
});

const handleRequestError = (error) => {
  console.error(error);
  throw new Error(error.message);
};

const getMovies = async () => {
  try {
    const response = await axiosInstance.get(`/trending/all/day?language=${LANGUAGE}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const getMovieById = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}?language=${LANGUAGE}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const getMovieCredits = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits?language=${LANGUAGE}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const getMovieReviews = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews?language=${LANGUAGE}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const searchMovies = async (keyword) => {
  try {
    const response = await axiosInstance.get(`/search/movie?query=${keyword}&language=${LANGUAGE}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export {
  getMovies,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
  searchMovies,
};
