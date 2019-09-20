import React from 'react';
import './UpperNav.scss';

import homepageIcon from '../../assets/homepage_logo.svg';
import facebookIcon from '../../assets/facebook_logo.svg';
import linkedinIcon from '../../assets/linkedin_logo.svg';
import githubIcon from '../../assets/github_logo.svg';

const UpperNav = () => {
	return (
		<div className="upperNav">
			<div className="upperNav__wrapper">
				<div className="navigation">
					<span className="navigation__left">&#x0003C;</span>
					<span className="navigation__center">&#x000B7;</span>
					<span className="navigation__right">&#x0003E;</span>
				</div>
				<div className="search">
					<div>
						<input type="text" placeholder="     Search movie" required />
					</div>
				</div>
				<div className="socialMedia">
					<a href="https://vuzeta.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
						<img
							src={homepageIcon}
							alt="homepage logo"
							className="socialMedia__logo upperNav__logo"
						/>
					</a>
					<a
						href="https://www.facebook.com/mateusz.machnik.1?ref=bookmarks"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={facebookIcon}
							alt="facebook logo"
							className="socialMedia__logo upperNav__logo"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/mateusz-machnik-566468159/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={linkedinIcon}
							alt="linkedin logo"
							className="socialMedia__logo upperNav__logo"
						/>
					</a>
					<a href="https://github.com/Vuzeta" target="_blank" rel="noopener noreferrer">
						<img src={githubIcon} alt="github logo" className="socialMedia__logo upperNav__logo" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default UpperNav;
