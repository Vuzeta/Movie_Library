import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainLinks.scss';

const linksArray = [
  {
    path: '/',
    title: 'Popularity',
    titlePL: 'Popularne',
  },
  {
    path: '/tv-shows',
    title: 'TV SHOWS',
    titlePL: 'Seriale TV',
  },
  {
    path: '/favourite',
    title: 'Favourite',
    titlePL: 'Ulubione',
  },
];

const MainLinks = ({ languageSite }) => {
  const linksList = linksArray.map((link, i) => (
    <li className="mainLinks__item" key={i}>
      <NavLink to={link.path} exact className="mainLinks__link" activeClassName="link_selected">
        {languageSite === 'pl-PL' ? link.titlePL : link.title}
      </NavLink>
    </li>
  ));
  return (
    <nav className="mainLinks">
      <ul className="mainLinks__list">{linksList}</ul>
    </nav>
  );
};

export default MainLinks;
