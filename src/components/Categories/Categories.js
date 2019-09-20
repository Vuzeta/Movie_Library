import React from 'react';
import './Categories.scss';

const Categories = ({ handleSearchID }) => {
	return (
		<div className="categories">
			<p className="categories__title">Categories</p>
			<ul className="categories__list" onClick={handleSearchID}>
				<li className="categories__link" data-id="28">
					Action
				</li>
				<li className="categories__link" data-id="12">
					Adventure
				</li>
				<li className="categories__link" data-id="16">
					Animation
				</li>
				<li className="categories__link" data-id="35">
					Comedy
				</li>
				<li className="categories__link" data-id="80">
					Crime
				</li>
				<li className="categories__link" data-id="99">
					Documentary
				</li>
				<li className="categories__link" data-id="18">
					Drama
				</li>
				<li className="categories__link" data-id="10751">
					Family
				</li>
				<li className="categories__link" data-id="14">
					Fantasy
				</li>
				<li className="categories__link" data-id="36">
					History
				</li>
				<li className="categories__link" data-id="27">
					Horror
				</li>
				<li className="categories__link" data-id="10402">
					Music
				</li>
				<li className="categories__link" data-id="9648">
					Mystery
				</li>
				<li className="categories__link" data-id="10749">
					Romance
				</li>
				<li className="categories__link" data-id="878">
					Science Fiction
				</li>
				<li className="categories__link" data-id="10770">
					TV Movie
				</li>
				<li className="categories__link" data-id="53">
					Thriller
				</li>
				<li className="categories__link" data-id="10752">
					War
				</li>
				<li className="categories__link" data-id="37">
					Western
				</li>
			</ul>
		</div>
	);
};

export default Categories;
