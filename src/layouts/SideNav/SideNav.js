import React from 'react';
import './SideNav.scss';

import Categories from '../../components/Categories/Categories';
import Logo from '../../components/Logo/Logo';
import MainLinks from '../../components/MainLinks/MainLinks';

const SideNav = ({ handleSearchID, handleMovieID }) => {
	return (
		<div className="sideNav">
			<div className="sideNav__wrapper">
				<Logo />
				<MainLinks handleSearchID={handleSearchID} handleMovieID={handleMovieID} />
				<Categories handleSearchID={handleSearchID} handleMovieID={handleMovieID} />
			</div>
		</div>
	);
};

export default SideNav;
