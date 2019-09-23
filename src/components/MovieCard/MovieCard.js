import React from 'react';
import './MovieCard.scss';

import noImg from '../../assets/noImg.jpg';

const MovieCard = ({ id, title, imgPath, handleMovieID }) => {
	return (
		<div className="card" onClick={e => handleMovieID(id)}>
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
