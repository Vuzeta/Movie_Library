import React from 'react';
import './App.scss';

import SideNav from '../layouts/SideNav/SideNav';
import UpperNav from '../layouts/UpperNav/UpperNav';
import CenterNav from '../layouts/CenterNav/CenterNav';

const app = () => {
	return (
		<div className="container">
			<SideNav />
			<UpperNav />
			<CenterNav />
		</div>
	);
};

export default app;
