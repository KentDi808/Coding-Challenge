import get from 'lodash.get';

import { FETCH_MOVIE_COMPLETED } from '../constants/action-types';

const moviesReducer = (state = {}, action) => {
  const movies = get(state, 'movies');
  switch (action.type) {
    case FETCH_MOVIE_COMPLETED:
      if (!movies) {
        return { ...state, movies: [action.payload] };
      } else {
        return { ...state, movies: [...state.movies, action.payload] };
      }
    default: {
      return { ...state };
    }
  }
};

export default moviesReducer;
