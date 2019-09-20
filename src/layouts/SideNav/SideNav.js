import React from 'react';
import './SideNav.scss';

import Categories from '../../components/Categories/Categories';
import Logo from '../../components/Logo/Logo';
import MainLinks from '../../components/MainLinks/MainLinks';

const SideNav = ({ handleSearchID }) => {
	return (
		<div className="sideNav">
			<div className="sideNav__wrapper">
				<Logo />
				<MainLinks handleSearchID={handleSearchID} />
				<Categories handleSearchID={handleSearchID} />
			</div>
		</div>
	);
};

export default SideNav;
