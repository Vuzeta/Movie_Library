import React, { Component } from 'react';
import './App.scss';

import SideNav from '../layouts/SideNav/SideNav';
import UpperNav from '../layouts/UpperNav/UpperNav';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Popularity from '../pages/Popularity/Popularity';
import TVShows from '../pages/TV_Shows/TV_Shows';
import Favourite from '../pages/Favourite/Favourite';
import Action from '../pages/Action/Action';
import Adventure from '../pages/Adventure/Adventure';
import Animation from '../pages/Animation/Animation';
import Comedy from '../pages/Comedy/Comedy';
import Crime from '../pages/Crime/Crime';
import Documentary from '../pages/Documentary/Documentary';
import Drama from '../pages/Drama/Drama';
import Family from '../pages/Family/Family';
import Fantasy from '../pages/Fantasy/Fantasy';
import History from '../pages/History/History';
import Horror from '../pages/Horror/Horror';
import Music from '../pages/Music/Music';
import Mystery from '../pages/Mystery/Mystery';
import Romance from '../pages/Romance/Romance';
import ScienceFiction from '../pages/Science_Fiction/Science_Fiction';
import TVMovie from '../pages/TV_Movie/TV_Movie';
import Thriller from '../pages/Thriller/Thriller';
import War from '../pages/War/War';
import Western from '../pages/Western/Western';
import Search from '../pages/Search/Search';
import Movie from '../components/Movie/Movie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    movieQuery: '',
    select: '',
    favouriteMovies: [],
    languageSite: 'en-US',
  };

  changeLanguage = languageSite => {
    this.setState({ languageSite });
  };

  addToFavouriteMovies = (category, id, title) => {
    this.setState(prevState => ({
      favouriteMovies: [...prevState.favouriteMovies, { category, id, title }],
    }));
    toast.success(
      `👍 ${title} ${
        this.state.languageSite === 'pl-PL' ? 'dodano do ulubionych' : 'added to favourite'
      }`,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      },
    );
  };

  removeFromFavouriteMovie = (id, title) => {
    let movies = this.state.favouriteMovies;
    movies = movies.filter(movie => movie.id !== id && movie.title !== title);
    this.setState({
      favouriteMovies: movies,
    });
    toast.info(
      `👍 ${title} ${
        this.state.languageSite === 'pl-PL' ? 'usunięto z ulubionych' : 'removed from favourite'
      } `,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      },
    );
  };

  handleMovieQuery = (movieQuery, select) => {
    this.setState({
      movieQuery,
      select,
    });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <SideNav languageSite={this.state.languageSite} />
          <UpperNav
            handleMovieQuery={this.handleMovieQuery}
            changeLanguage={this.changeLanguage}
            languageSite={this.state.languageSite}
          />
          <div className="centerNav">
            <Route
              path="/"
              exact
              render={props => <Popularity {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/tv-shows"
              render={props => <TVShows {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/favourite"
              render={props => (
                <Favourite
                  {...props}
                  favouriteMovies={this.state.favouriteMovies}
                  languageSite={this.state.languageSite}
                />
              )}
            />
            <Route
              path="/action"
              render={props => <Action {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/adventure"
              render={props => <Adventure {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/animation"
              render={props => <Animation {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/comedy"
              render={props => <Comedy {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/crime"
              render={props => <Crime {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/documentary"
              render={props => <Documentary {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/drama"
              render={props => <Drama {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/family"
              render={props => <Family {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/fantasy"
              render={props => <Fantasy {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/history"
              render={props => <History {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/horror"
              render={props => <Horror {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/music"
              render={props => <Music {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/mystery"
              render={props => <Mystery {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/romance"
              render={props => <Romance {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/science-fiction"
              render={props => <ScienceFiction {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/tv-movie"
              render={props => <TVMovie {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/thriller"
              render={props => <Thriller {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/war"
              render={props => <War {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/western"
              render={props => <Western {...props} languageSite={this.state.languageSite} />}
            />
            <Route
              path="/movie/:category/:type/:id"
              render={props => (
                <Movie
                  {...props}
                  select={this.state.select}
                  addToFavouriteMovies={this.addToFavouriteMovies}
                  removeFromFavouriteMovie={this.removeFromFavouriteMovie}
                  languageSite={this.state.languageSite}
                  favouriteMovies={this.state.favouriteMovies}
                />
              )}
            />
            <Route
              path="/search/:query"
              render={props => (
                <Search
                  {...props}
                  movieQuery={this.state.movieQuery}
                  select={this.state.select}
                  languageSite={this.state.languageSite}
                />
              )}
            />
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover={false}
        />
      </Router>
    );
  }
}

export default App;
