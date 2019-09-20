import React from 'react';

import './MainLinks.scss';

const MainLinks = ({ handleSearchID }) => {
	return (
		<div className="mainLinks">
			<ul className="mainLinks__list" onClick={handleSearchID}>
				<li className="mainLinks__link" data-id="1">
					Popularity
				</li>
				<li className="mainLinks__link" data-id="2">
					TV Shows
				</li>
				<li className="mainLinks__link" data-id="3">
					Favourite
				</li>
			</ul>
		</div>
	);
};

export default MainLinks;
