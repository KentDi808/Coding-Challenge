import axios from 'axios';

import {
  FETCH_MOVIE_COMPLETED,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIES_FAILED,
} from '../constants/action-types';

export const fetchMovies = (title) => {
  return (dispatch) => {
    const options = {
      url: `http://www.omdbapi.com/?s=${title}&apikey=f20a3650`,
    };
    axios.request(options).catch((error) => {
      dispatch({ type: FETCH_MOVIES_FAILED, payload: error });
    }).then((result) => {
      const movies = result.data.Search;
      movies.forEach((movie) => {
        const subOpt = {
          url: `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=f20a3650`,
        };
        axios.request(subOpt).catch((error) => {
          dispatch({ type: FETCH_MOVIE_FAILED, payload: error });
        }).then((subResult) => {
          dispatch({ type: FETCH_MOVIE_COMPLETED, payload: subResult.data });
        });
      });
    });
  };
};
