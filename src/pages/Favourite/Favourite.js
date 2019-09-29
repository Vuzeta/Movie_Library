import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';
const _LANGUAGE = 'en-US';
const _PAGETITLE = 'Favourite';

class Favourite extends Component {
  state = {
    movies: [],
    error: false,
  };

  componentDidMount() {
    const moviesList = this.props.favouriteMovies;
    moviesList.forEach(movie => {
      const requestHost = `https://api.themoviedb.org/3/${movie.category}/${movie.id}?api_key=${_APIKEY}&language=${_LANGUAGE}`;

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
          console.log(error);
          this.setState(prevState => ({
            error: !prevState.error,
          }));
        });
    });
  }

  render() {
    const { movies, error } = this.state;
    console.log(movies);
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
        <h1 className="centerNav__title">{_PAGETITLE}</h1>
        <div className="movies">{error ? <ErrorMessage /> : moviesList}</div>
      </div>
    );
  }
}

export default Favourite;
