import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainLinks.scss';

const MainLinks = ({ handleSearchID }) => {
	return (
		<div className="mainLinks">
			<ul className="mainLinks__list">
				<li className="mainLinks__item">
					<NavLink
						to="/"
						exact
						className="mainLinks__link"
						activeClassName="link_selected"
						data-id="1"
						onClick={handleSearchID}
					>
						Popularity
					</NavLink>
				</li>
				<li className="mainLinks__item">
					<NavLink
						to="/tv-shows"
						className="mainLinks__link"
						activeClassName="link_selected"
						data-id="2"
						onClick={handleSearchID}
					>
						TV SHOWS
					</NavLink>
				</li>
				<li className="mainLinks__item">
					<NavLink
						to="/favourite"
						className="mainLinks__link"
						activeClassName="link_selected"
						data-id="3"
						onClick={handleSearchID}
					>
						Favourite
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default MainLinks;
