import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Movie from './Movie';

function MovieList (props) {
  const { data, onClick } = props;
  const { t } = useTranslation();
  function _onClick (imdbID) {
    if (onClick) {
      onClick(imdbID);
    }
  }

  function renderMovies () {
    const btnLabel = t('components.movielist.viewonimdb');
    return data.map((movie) => {
      return (
        <tr key={ movie.imdbID }>
          <td>
            <Movie
              btnLabel={ btnLabel }
              movieData={ movie }
              onClick={ _onClick }
            />
          </td>
        </tr>
      );
    });
  }

  return (
    <table>
      <tbody>
        { renderMovies() }
      </tbody>
    </table>
  );
}

MovieList.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
};

export default MovieList;
