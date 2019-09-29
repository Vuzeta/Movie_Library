import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainLinks.scss';

const linksArray = [
  {
    path: '/',
    title: 'Popularity',
  },
  {
    path: '/tv-shows',
    title: 'TV SHOWS',
  },
  {
    path: '/favourite',
    title: 'Favourite',
  },
];

const MainLinks = ({ handleSearchID }) => {
  const linksList = linksArray.map((link, i) => (
    <li className="mainLinks__item" key={i}>
      <NavLink
        to={link.path}
        exact
        className="mainLinks__link"
        activeClassName="link_selected"
        onClick={handleSearchID}
      >
        {link.title}
      </NavLink>
    </li>
  ));
  return (
    <div className="mainLinks">
      <ul className="mainLinks__list">{linksList}</ul>
    </div>
  );
};

export default MainLinks;
