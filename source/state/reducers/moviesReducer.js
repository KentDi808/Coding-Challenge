import { FETCH_MOVIES_COMPLETED, FETCH_MOVIE_COMPLETED } from '../constants/action-types';
import get from 'lodash.get';

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES_COMPLETED:
      return { ...state, movies: action.payload };
    case FETCH_MOVIE_COMPLETED:
      const movies = get(state, 'movies');
      if (!movies) {
        return { ...state, movies: [action.payload]};
      } else {
        return { ...state, movies: [...state.movies, action.payload] };
      }
    default: {
      return { ...state };
    }
  }
};

export default moviesReducer;
