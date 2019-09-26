import React from 'react';
import './MovieCard.scss';

import { Link } from 'react-router-dom';

import noImg from '../../assets/noImg.jpg';

const MovieCard = ({ id, title, imgPath, category }) => {
  return (
    <Link to={`/movie/${encodeURIComponent(category)}/${id}`}>
      <div className="card">
        <img
          src={imgPath === null ? noImg : `https://image.tmdb.org/t/p/w500${imgPath}`}
          alt={title}
          className="card__img"
        />
        <p className="card__title">{title}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
