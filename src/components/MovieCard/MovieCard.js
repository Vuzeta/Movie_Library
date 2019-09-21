import React from 'react';
import './MovieCard.scss';

import noImg from '../../assets/noImg.jpg';

const MovieCard = ({ title, imgPath }) => {
  console.log(imgPath);
  return (
    <div className="card">
      <img
        src={imgPath === null ? noImg : `https://image.tmdb.org/t/p/w500${imgPath}`}
        alt={title}
        className="card__img"
      />
      <p className="card__title">{title}</p>
    </div>
  );
};

export default MovieCard;
