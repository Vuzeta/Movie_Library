import React, { Component } from 'react';

const _PAGETITLE = 'Favourite';

class Favourite extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1 className="centerNav__title">{_PAGETITLE}</h1>
			</div>
		);
	}
}

export default Favourite;
