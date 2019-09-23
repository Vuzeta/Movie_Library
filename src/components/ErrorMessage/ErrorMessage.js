import React from 'react';

import './ErrorMessage.scss';
import errorImg from '../../assets/errorImg.png';

const ErrorMessage = () => {
	return (
		<div className="errorContainer">
			<img src={errorImg} alt="error image" className="errorContainer__img" />
			<h1 className="errorContainer__text">Something went wrong, try again later</h1>
		</div>
	);
};

export default ErrorMessage;
