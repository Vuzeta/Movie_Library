import React, { Component } from 'react';
import './AddFavourite.scss';
import 'react-toastify/dist/ReactToastify.css';

class AddFavourite extends Component {
  state = {
    active: false,
  };

  clickFavourite = () => {
    const id = this.props.id;
    const category = this.props.category;
    const title = this.props.title;
    if (this.state.active) {
      this.setState(prevState => ({ active: !prevState.active }));
      this.props.removeFromFavouriteMovie(id, title);
    } else {
      this.props.addToFavouriteMovies(category, id, title);
      this.setState(prevState => ({ active: !prevState.active }));
    }
  };

  componentDidMount() {
    const id = this.props.id;
    let movies = this.props.favouriteMovies;
    movies = movies.findIndex(movie => movie.id === id);
    if (movies > -1) {
      this.setState({ active: true });
    }
  }

  render() {
    const { active } = this.state;
    return (
      <>
        <div className="wishlist-heart-group">
          <input
            name="product-333"
            id="product-333"
            data-product-id="333"
            type="checkbox"
            onClick={() => this.clickFavourite()}
            checked={active ? 'checked' : null}
          />
          <label htmlFor="product-333">
            <svg width="55px" height="55px" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
              <g transform="translate(0,-952.36218)">
                <path
                  d="m 34.166665,972.36218 c -11.41955,0 -19.16666,8.91891 -19.16666,20.27029 0,19.45943 15,27.56753 35,39.72973 20.00001,-12.1622 34.99999,-20.2703 34.99999,-39.72973 0,-11.35137 -7.7471,-20.27029 -19.16665,-20.27029 -7.35014,0 -13.39148,4.05405 -15.83334,6.48647 -2.44185,-2.43241 -8.48319,-6.48647 -15.83334,-6.48647 z"
                  fill="transparent"
                  id="heart-path"
                  stroke="#737373"
                  strokeWidth="5"
                  marker="none"
                  visibility="visible"
                  display="inline"
                  overflow="visible"
                />
              </g>
            </svg>
          </label>
        </div>
      </>
    );
  }
}

export default AddFavourite;
