import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTIwYzliZWMwOWE4MTJiYzM2YzNiNTNlOWU5ZjNlNSIsInN1YiI6IjY0ODM3NmJmYzlkYmY5MDBjNTcxMWJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8YvYBh5kr88uuL-CjfWLbM4Y1pFnOV1o1eMa5ZNh3Q4',
  },
};

const getMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default getMovies;