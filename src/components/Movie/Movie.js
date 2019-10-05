import React, { Component } from 'react';
import axios from 'axios';

import './Movie.scss';

import Starbox from '../Starbox/Starbox';
import Characteristic from '../Characteristic/Characteristic';
import Overview from '../Overview/Overview';
import Cast from '../Cast/Cast';
import Crew from '../Crew/Crew';
import Spinner from '../Spinner/Spinner';
import AddFavourite from '../AddFavourite/AddFavourite';
import RemoveFavourite from '../RemoveFavourite/RemoveFavourite';
import WatchTrailer from '../WatchTrailer/WatchTrailer';

const _APIKEY = '0c86cfa0a9f5e305d26a1995c47aa609';

class Movie extends Component {
  state = {
    id: this.props.match.params.id,
    category: '',
    title: '',
    gendre: '',
    adult: false,
    overview: '',
    release_date: '',
    ratio: 0,
    runtime: null,
    directed: [],
    cast: [],
    background_poster: '',
    error: false,
    videoKey: '',
  };

  componentDidMount() {
    let category = this.props.match.params.type;

    const requestHost = `https://api.themoviedb.org/3/${category}/${this.state.id}?api_key=${_APIKEY}&append_to_response=credits&language=${this.props.languageSite}`;
    const video = `https://api.themoviedb.org/3/${category}/${this.state.id}?api_key=${_APIKEY}&append_to_response=videos`;

    if (category === 'tv') {
      axios
        .get(requestHost)
        .then(res => {
          setTimeout(() => {
            this.setState({
              loading: true,
            });
          }, 500);

          const {
            backdrop_path,
            created_by,
            credits,
            genres,
            name,
            overview,
            vote_average,
          } = res.data;

          this.setState({
            title: name,
            category,
            overview,
            gendre: genres[0].name,
            ratio: vote_average / 2,
            cast: credits.cast.splice(0, 8),
            directed: created_by.splice(0, 3),
            background_poster: `https://image.tmdb.org/t/p/original${backdrop_path}`,
          });
        })
        .catch(error => {
          this.setState(prevState => ({
            error: !prevState.error,
          }));
        });

      axios.get(video).then(res => {
        const { videos } = res.data;
        this.setState({
          videoKey: videos.results.splice(0, 1)[0].key,
        });
      });
    } else {
      axios
        .get(requestHost)
        .then(res => {
          setTimeout(() => {
            this.setState({
              loading: true,
            });
          }, 500);

          const {
            title,
            overview,
            genres,
            vote_average,
            runtime,
            release_date,
            credits,
            adult,
            backdrop_path,
          } = res.data;
          this.setState({
            title,
            overview,
            runtime,
            category,
            release_date,
            gendre: genres[0].name,
            adult,
            ratio: vote_average / 2,
            cast: credits.cast.splice(0, 8),
            directed: credits.crew.splice(0, 3),
            background_poster: `https://image.tmdb.org/t/p/original${backdrop_path}`,
          });
        })
        .catch(error => {
          this.setState(prevState => ({
            error: !prevState.error,
          }));
        });

      axios.get(video).then(res => {
        const { videos } = res.data;
        this.setState({
          videoKey: videos.results.splice(0, 1)[0].key,
        });
      });
    }
  }

  render() {
    const {
      id,
      title,
      gendre,
      overview,
      ratio,
      runtime,
      release_date,
      category,
      cast,
      directed,
      adult,
      background_poster,
      videoKey,
    } = this.state;
    return (
      <div className="movie">
        {!this.state.loading ? <Spinner /> : null}
        <div className="movie__bg" style={{ background: `url(${background_poster})` }}></div>
        <div className="movie__box">
          <div className="movie__header">
            <h1 className="movie__title">{title}</h1>
            {this.props.match.params.category === 'Favourite' ? (
              <RemoveFavourite
                category={this.state.category}
                id={this.state.id}
                removeFromFavouriteMovie={this.props.removeFromFavouriteMovie}
                title={this.state.title}
              />
            ) : (
              <AddFavourite
                category={this.state.category}
                id={this.state.id}
                addToFavouriteMovies={this.props.addToFavouriteMovies}
                title={this.state.title}
              />
            )}
          </div>

          <div className="movie__ranking">
            <Starbox ratio={ratio} />
            <Characteristic
              gendre={gendre}
              runtime={runtime}
              release_date={release_date}
              adult={adult}
            />
          </div>
          <Overview overview={overview} />
          <WatchTrailer videoKey={videoKey} languageSite={this.props.languageSite} />
          <Cast cast={cast} languageSite={this.props.languageSite} />
        </div>
        <Crew directed={directed} category={category} languageSite={this.props.languageSite} />
      </div>
    );
  }
}

export default Movie;
