import React from 'react';
import './CenterNav.scss';
import MovieCard from '../../components/MovieCard/MovieCard';

const CenterNav = ({ title, movies }) => {
	const moviesList = movies.map(card => (
		<MovieCard key={card.id} title={card.title || card.name} imgPath={card.poster_path} />
	));
	return (
		<div className="centerNav">
			<h1 className="centerNav__title">{title}</h1>
			<div className="movie">{moviesList}</div>
		</div>
	);
};

export default CenterNav;
