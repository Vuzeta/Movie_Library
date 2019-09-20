import React from 'react';
import './Categories.scss';

const Categories = () => {
	return (
		<div className="categories">
			<p className="categories__title">Categories</p>
			<ul className="categories__list">
				<li className="categories__link">Action</li>
				<li className="categories__link">Adventure</li>
				<li className="categories__link">Animation</li>
				<li className="categories__link">Comedy</li>
				<li className="categories__link">Crime</li>
				<li className="categories__link">Documentary</li>
				<li className="categories__link">Drama</li>
				<li className="categories__link">Family</li>
				<li className="categories__link">Fantasy</li>
				<li className="categories__link">History</li>
				<li className="categories__link">Horror</li>
				<li className="categories__link">Music</li>
				<li className="categories__link">Mystery</li>
				<li className="categories__link">Romance</li>
				<li className="categories__link">Science Fiction</li>
				<li className="categories__link">TV Movie</li>
				<li className="categories__link">Thriller</li>
				<li className="categories__link">War</li>
				<li className="categories__link">Western</li>
			</ul>
		</div>
	);
};

export default Categories;
