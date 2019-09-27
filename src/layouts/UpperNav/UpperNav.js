import React, { Component } from 'react';
import './UpperNav.scss';

import homepageIcon from '../../assets/homepage_logo.svg';
import facebookIcon from '../../assets/facebook_logo.svg';
import linkedinIcon from '../../assets/linkedin_logo.svg';
import githubIcon from '../../assets/github_logo.svg';
import magnifier from '../../assets/magnifier.svg';

import { withRouter } from 'react-router-dom';

class UpperNav extends Component {
  state = {
    search: '',
    focusSearch: false,
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    console.log(`wyszukaj : ${this.state.search}`);
    this.setState(prevState => ({
      search: '',
      focusSearch: !prevState.focusSearch,
    }));
    this.props.handleMovieQuery(this.state.search);
    this.props.history.push(`/search/${encodeURIComponent(this.state.search)}`);
  };

  handleSearch = e => {
    const value = e.target.value;
    this.setState({
      search: value,
    });
  };

  clickSearch = () => {
    this.setState(prevState => ({
      focusSearch: !prevState.focusSearch,
    }));
  };

  render() {
    const { search, focusSearch } = this.state;
    return (
      <div className="upperNav">
        <div className="upperNav__wrapper">
          <div className="navigation">
            <span className="navigation__left">&#x0003C;</span>
            <span className="navigation__center">&#x000B7;</span>
            <span className="navigation__right">&#x0003E;</span>
          </div>
          <div className="search">
            <form className="search__form" onSubmit={this.handleSearchSubmit}>
              <input
                type="text"
                className="search__input"
                placeholder={focusSearch ? '' : '...Search'}
                value={search}
                onChange={this.handleSearch}
                onClick={this.clickSearch}
                required
              />
              <button className="search__button">
                <img className="search__icon" src={magnifier} alt="magnifier" />
              </button>
            </form>
          </div>
          <div className="socialMedia">
            <a href="https://vuzeta.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
              <img
                src={homepageIcon}
                alt="homepage logo"
                className="socialMedia__logo upperNav__logo"
              />
            </a>
            <a
              href="https://www.facebook.com/mateusz.machnik.1?ref=bookmarks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="facebook logo"
                className="socialMedia__logo upperNav__logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mateusz-machnik-566468159/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="linkedin logo"
                className="socialMedia__logo upperNav__logo"
              />
            </a>
            <a href="https://github.com/Vuzeta" target="_blank" rel="noopener noreferrer">
              <img
                src={githubIcon}
                alt="github logo"
                className="socialMedia__logo upperNav__logo"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UpperNav);
