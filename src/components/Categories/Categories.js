import React from 'react';

import { NavLink } from 'react-router-dom';

import './Categories.scss';

const Categories = ({ handleSearchID }) => {
	return (
		<div className="categories">
			<p className="categories__title">Categories</p>
			<ul className="categories__list">
				<li className="categories_item">
					<NavLink
						to="/action"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Action
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/adventure"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Adventure
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/animation"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Animation
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/comedy"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Comedy
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/crime"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Crime
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/documentary"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Documentary
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/drama"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Drama
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/family"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Family
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/fantasy"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Fantasy
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/history"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						History
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/horror"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Horror
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/music"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Music
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/mystery"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Mystery
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/romance"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Romance
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/science-fiction"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Science Fiction
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/tv-movie"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						TV Movie
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/thriller"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Thriller
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/war"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						War
					</NavLink>
				</li>
				<li className="categories_item">
					<NavLink
						to="/western"
						exact
						className="categories__link"
						activeClassName="categories__selected"
					>
						Western
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Categories;
