import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';

const _PAGETITLE = 'Favourite';
const _PAGETITLE_PL = 'Ulubione';

class Favourite extends Component {
  state = {
    movies: [],
    error: false,
  };

  componentDidMount() {
    const moviesList = this.props.favouriteMovies;
    moviesList.forEach(movie => {
      const requestHost = `https://api.themoviedb.org/3/${movie.category}/${movie.id}?api_key=${_APIKEY}&language=${this.props.languageSite}`;

      axios
        .get(requestHost)
        .then(res => {
          let data = res.data;
          const type = movie.category;
          Object.assign(data, { my_TYPE: type });

          this.setState(prevState => ({
            movies: [...prevState.movies, data],
          }));
        })
        .catch(error => {
           
          this.setState(prevState => ({
            error: !prevState.error,
          }));
        });
    });
  }

  render() {
    const { movies, error } = this.state;
    const moviesList = movies.map(card => (
      <MovieCard
        key={card.id}
        id={card.id}
        title={card.title || card.name}
        imgPath={card.poster_path}
        category={_PAGETITLE}
        type={card.my_TYPE}
      />
    ));

    return (
      <div>
        <h1 className="centerNav__title">
          {this.props.languageSite === 'pl-PL' ? _PAGETITLE_PL : _PAGETITLE}
        </h1>
        {movies.length === 0 ? (
          <h2 className="centerNav__noData">
            {this.props.languageSite === 'pl-PL'
              ? 'Lista ulubionych jest pusta'
              : 'Favorites list is empty'}
          </h2>
        ) : null}
        <div className="movies">{error ? <ErrorMessage /> : moviesList}</div>
      </div>
    );
  }
}

export default Favourite;
