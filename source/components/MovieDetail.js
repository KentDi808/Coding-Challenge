import React from 'react';
import PropTypes from 'prop-types';

function MovieDetail (props) {
  const { length, rated, releaseDate } = props;
  return (
    <div className="movie-info__details">
      <div className="rated">
        { rated }
      </div>
      <div className="length">
        { length }
      </div>
      <div className="release-date">
        { releaseDate }
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  length: PropTypes.string,
  rated: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default MovieDetail;
