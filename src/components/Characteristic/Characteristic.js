import React from 'react';
import './Characteristic.scss';

const Characteristic = ({ gendre, runtime, release_date, adult }) => {
	return (
		<div className="characteristic">
			<span className="characteristic__gendre">{gendre || 'Unknown'} </span>
			{runtime && <span className="characteristic__time"> / {runtime} min </span>}

			{release_date && (
				<span className="characteristic__releaseDate"> / {release_date.split('-')[0]}</span>
			)}
			{adult ? <span className="characteristic__releaseDate"> / 18 +</span> : null}
		</div>
	);
};

export default Characteristic;
