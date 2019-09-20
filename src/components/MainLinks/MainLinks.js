import React from 'react';

import './MainLinks.scss';

const MainLinks = () => {
	return (
		<div className="mainLinks">
			<ul className="mainLinks__list">
				<li className="mainLinks__link">Popularity</li>
				<li className="mainLinks__link">TV Shows</li>
				<li className="mainLinks__link">Favourite</li>
			</ul>
		</div>
	);
};

export default MainLinks;
