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
    fetchMovieList: title => dispatch(fetchMovies(title)),
  };
};

function MainView (props) {
  const { fetchMovieList, movies, title } = props;
  const { t } = useTranslation();
  const [buttons, setButtons] = useState([
    { label: '2000\'s', id: 'btn2000s', selected: true },
    { label: '1990\'s', id: 'btn1990s', selected: false },
  ]);
  const [filter, setFilter] = useState('btn2000s');

  useEffect(() => {
    if (movies === undefined) {
      fetchMovieList(title);
    }
  }, []);

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
      const year = parseInt(movie.Year, 10);
      if (filter === 'btn2000s') {
        return year >= 2000;
      } else if (filter === 'btn1990s') {
        return year < 2000;
      }
      return false;
    });

    const sortedMovies = filteredMovies.sort((a, b) => {
      return parseInt(a.Year, 10) - parseInt(b.Year, 10);
    });


    const btns = buttons.map((btn) => {
      if (btn.id === 'btn2000s') {
        btn.label = t('views.resultsview.btngrp2000s');
      } else if (btn.id === 'btn1990s') {
        btn.label = t('views.resultsview.btngrp1990s');
      }
      return btn;
    });

    return (
      <Fragment>
        <div className="button-group__wrapper">
          <ButtonGroup
            buttons={ btns }
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
      <div>{ t('views.resultsview.loading') }</div>
    );
  }
}

MainView.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.array,
  title: PropTypes.string,
};

MainView.defaultProps = {
  title: 'batman',
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
