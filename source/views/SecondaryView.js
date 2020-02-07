import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchMovies } from '../state/actions/moviesActions';
import MovieList from '../components/MovieList';
import ButtonGroup from '../components/ButtonGroup';

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (t) => dispatch(fetchMovies(t)),
  };
};

function SecondaryView (props) {
  const { fetchMovieList, movies, title } = props;
  const { t, ready } = useTranslation();
  const [buttons, setButtons] = useState([]);
  const [filter, setFilter] = useState('btn2000s');

  useEffect(() => {
    if (movies === undefined) {
      fetchMovieList(title);
    }
  }, []);

  useEffect(() => {
    if (buttons.length === 0 && ready) {
      setButtons([
        { label: t('views.resultsview.btngrp2000s'), id: 'btn2000s', selected: true },
        { label: t('views.resultsview.btngrp1990s'), id: 'btn1990s', selected: false }
      ]);
    }
  }, [movies]);

  function _onClick (imdbID) {
    window.location.href = `http://www.imdb.com/title/${imdbID}`;
  }

  function _onButtonGroupClick (id) {
    const newButtons = buttons.map((btn) => {
      btn.selected = btn.id === id;
      return btn;
    });
    setButtons(newButtons);
    setFilter(id);
  }

  if (movies) {
    const filteredMovies = movies.filter((movie) => {
      const year = parseInt(movie.Year);
      if (filter === 'btn2000s') {
        return year >= 2000;
      } else if (filter === 'btn1990s') {
        return year < 2000;
      }
    });
    const sortedMovies = filteredMovies.sort((a, b) => {
      return parseInt(a.Year) - parseInt(b.Year);
    })
    return (
      <Fragment>
        <div className="button-group__wrapper">
          <ButtonGroup
            buttons={ buttons }
            onClick={ _onButtonGroupClick }
          />
        </div>
        <MovieList
          data={ sortedMovies.slice(0, 9) }
          onClick={ _onClick }
        ></MovieList>
      </Fragment>
    );
  } else {
    return (
      <div>{ t('views.resultsview.loading' )}</div>
    );
  }
}

SecondaryView.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.array,
  title: PropTypes.string,
};

SecondaryView.defaultProps = {
  title: 'batman',
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryView);
