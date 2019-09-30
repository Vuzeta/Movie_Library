import React, { Component } from 'react';

import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';
const _PAGETITLE = 'Horror';
const _PAGETITLE_PL = 'Horror';
const _GENDRES_ID = 27;

const _TYPE = 'movie';

class Horror extends Component {
  state = {
    movies: [],
    total_pages: 0,
    current_page: 1,
    error: false,
  };

  changePage = e => {
    const page = e.selected + 1;

    const requestHost = `https://api.themoviedb.org/3/discover/movie?api_key=${_APIKEY}&language=${this.props.languageSite}&sort_by=popularity.desc&page=${page}&with_genres=${_GENDRES_ID}`;

    axios
      .get(requestHost)
      .then(res => {
        setTimeout(() => {
          this.setState({
            loading: true,
          });
        }, 500);

        this.setState({
          movies: res.data.results,
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState(prevState => ({
          error: !prevState.error,
        }));
      });
  };

  componentDidMount() {
    const requestHost = `https://api.themoviedb.org/3/discover/movie?api_key=${_APIKEY}&language=${this.props.languageSite}&sort_by=popularity.desc&page=1&with_genres=${_GENDRES_ID}`;

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
        console.log(error);
        this.setState(prevState => ({
          error: !prevState.error,
        }));
      });
  }
  render() {
    const { movies, total_pages, error } = this.state;

    const moviesList = movies.map(card => (
      <MovieCard
        key={card.id}
        id={card.id}
        title={card.title || card.name}
        imgPath={card.poster_path}
        category={_PAGETITLE}
        type={_TYPE}
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

export default Horror;
