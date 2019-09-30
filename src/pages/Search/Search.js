import React, { Component } from 'react';
import './Search.scss';

import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';

const _PAGETITLE = 'Search';
const _PAGETITLE_PL = 'Wyszukane';

class Search extends Component {
  state = {
    query: this.props.movieQuery,
    select: this.props.select,
    movies: [],
    total_pages: 0,
    current_page: 1,
    error: false,
    loading: false,
  };

  changePage = e => {
    const page = e.selected + 1;

    const requestHost = `https://api.themoviedb.org/3/search/${
      this.props.select
    }?api_key=${_APIKEY}&language=${this.props.languageSite}&query=${encodeURIComponent(
      this.props.movieQuery,
    )}&page=${page}`;
    axios
      .get(requestHost)
      .then(res => {
        setTimeout(() => {
          this.setState({
            loading: true,
          });
        }, 500);

        const onlyTvAndMovie = res.data.results.filter(el => el.media_TYPE !== 'person');

        this.setState({
          movies: onlyTvAndMovie,
          loading: false,
        });
      })
      .catch(error => {
        this.setState(prevState => ({
          error: !prevState.error,
        }));
      });
  };

  componentDidMount() {
    this.getDate();
  }

  componentDidUpdate() {
    if (this.state.query !== this.props.movieQuery || this.state.select !== this.props.select) {
      this.setState({
        query: this.props.movieQuery,
        select: this.props.select,
        loading: false,
      });
      this.getDate();
    }
  }

  getDate = () => {
    const requestHost = `https://api.themoviedb.org/3/search/${
      this.props.select
    }?api_key=${_APIKEY}&language=${this.props.languageSite}&query=${encodeURIComponent(
      this.props.movieQuery,
    )}&page=${this.state.current_page}`;

    axios
      .get(requestHost)
      .then(res => {
        setTimeout(() => {
          this.setState({
            loading: true,
          });
        }, 200);

        this.setState({
          movies: res.data.results,
          total_pages: res.data.total_pages,
        });
      })
      .catch(error => {
        this.setState(prevState => ({
          error: !prevState.error,
        }));
      });
  };

  render() {
    const { movies, total_pages, error } = this.state;

    const moviesList = movies.map(card => (
      <MovieCard
        key={card.id}
        id={card.id}
        title={card.title || card.name}
        imgPath={card.poster_path}
        category={_PAGETITLE}
        type={this.state.select}
      />
    ));
    return (
      <>
        <h1 className="centerNav__title">
          {this.props.languageSite === 'pl-PL' ? _PAGETITLE_PL : _PAGETITLE}
        </h1>
        <div className="movies">
          {!this.state.loading ? <Spinner /> : null}
          {error ? <ErrorMessage /> : moviesList}
        </div>
        {error ? null : <Pagination total_pages={total_pages} changePage={this.changePage} />}
      </>
    );
  }
}

export default Search;
