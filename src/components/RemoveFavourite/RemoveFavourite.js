import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class RemoveFavourite extends Component {
  state = {};

  removeFavourite = () => {
    const id = this.props.id;
    const title = this.props.title;
    this.props.removeFromFavouriteMovie(id, title);
    let path = `/Favourite`;
    this.props.history.push(path);
  };
  render() {
    return (
      <div className="movie__favourite" onClick={this.removeFavourite}>
        <span className="movie__favourite--span">&#x02013;</span>
      </div>
    );
  }
}

export default withRouter(RemoveFavourite);
