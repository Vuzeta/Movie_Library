import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, imgPath }) => {
	return (
		<div className="card">
			<img src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title} className="card__img" />
			<p className="card__title">{title}</p>
		</div>
	);
};

export default MovieCard;
