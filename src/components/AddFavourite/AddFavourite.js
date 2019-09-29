import React, { Component } from 'react';
import './AddFavourite.scss';
import 'react-toastify/dist/ReactToastify.css';

class AddFavourite extends Component {
  state = {};

  clickFavouriteSpan = () => {
    const id = this.props.id;
    const category = this.props.category;
    const title = this.props.title;
    this.props.addToFavouriteMovies(category, id, title);
  };
  render() {
    return (
      <>
        <div className="movie__favourite" onClick={this.clickFavouriteSpan}>
          <span className="movie__favourite--span">+</span>
        </div>
      </>
    );
  }
}

export default AddFavourite;
