import React, { Component } from 'react';
import './UpperNav.scss';

import Navigation from '../../components/Navigation/Navigation';
import Search from '../../components/Search/Search';
import Language from '../../components/Language/Language';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

import { withRouter } from 'react-router-dom';

class UpperNav extends Component {
  state = {
    select: 'tv',
    search: '',
    focusSearch: false,
  };

  changeLanguage = e => {
    const languageSite = e.target.dataset.language;
    this.props.changeLanguage(languageSite);
    this.props.history.push('/');
  };

  handleSelect = e => {
    const select = e.target.value;
    this.setState({
      select,
    });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      search: '',
      focusSearch: !prevState.focusSearch,
    }));
    this.props.handleMovieQuery(this.state.search, this.state.select);
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
      <aside className="upperNav">
        <div className="upperNav__wrapper">
          <Navigation />
          <Search
            handleSearchSubmit={this.handleSearchSubmit}
            focusSearch={focusSearch}
            search={search}
            handleSearch={this.handleSearch}
            clickSearch={this.clickSearch}
            languageSite={this.props.languageSite}
          />
          <Language changeLanguage={this.changeLanguage} />
          <SocialMedia />
        </div>
      </aside>
    );
  }
}

export default withRouter(UpperNav);
