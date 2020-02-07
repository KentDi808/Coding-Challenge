import React from 'react';
import PropTypes from 'prop-types';

import MovieDetail from './MovieDetail';

function Movie (props) {
  const { btnLabel, movieData, onClick } = props;
  const { imdbID, Plot, Poster, Rated, Released, Runtime, Title } = movieData;

  function _onClick () {
    if (onClick) {
      onClick(imdbID);
    }
  }

  return (
    <div
      className="movie"
    >
      <div
        className="movie-poster"
        onClick={ _onClick }
      >
        <img src={ Poster } />
      </div>
      <div
        className="movie-info"
      >
        <div className="movie-info__title">
          { Title }
        </div>
        <hr />
        <MovieDetail
          length={ Runtime }
          rated={ Rated }
          releaseDate={ Released }
        />
        <div className="movie-info__plot">
          { Plot }
        </div>
        <div className="movie-info__link">
          <button
            className="link-button"
            onClick={ _onClick }
          >
            { btnLabel }
          </button>
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  movieData: PropTypes.object,
  onClick: PropTypes.func,
};

export default Movie;
