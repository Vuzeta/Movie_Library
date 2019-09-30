import React from 'react';

import { NavLink } from 'react-router-dom';

import './Categories.scss';

const categoriesList = [
  {
    path: '/action',
    title: 'Action',
    titlePL: 'Akcja',
  },
  {
    path: '/adventure',
    title: 'Adventure',
    titlePL: 'Przygoda',
  },
  {
    path: '/animation',
    title: 'Animation',
    titlePL: 'Animacja',
  },
  {
    path: '/comedy',
    title: 'Comedy',
    titlePL: 'Komedia',
  },
  {
    path: '/crime',
    titlePL: 'Kryminał',
  },
  {
    path: '/documentary',
    title: 'Documentary',
    titlePL: 'Dokumentalne',
  },
  {
    path: '/drama',
    title: 'Drama',
    titlePL: 'Dramat',
  },
  {
    path: '/family',
    title: 'Family',
    titlePL: 'Familijne',
  },
  {
    path: '/fantasy',
    title: 'Fantasy',
    titlePL: 'Fantasy',
  },
  {
    path: '/history',
    title: 'History',
    titlePL: 'Historyczne',
  },
  {
    path: '/horror',
    title: 'Horror',
    titlePL: 'Horror',
  },
  {
    path: '/music',
    title: 'Music',
    titlePL: 'Musical',
  },
  {
    path: '/mystery',
    title: 'Mystery',
    titlePL: 'Tajemnicze',
  },
  {
    path: '/romance',
    title: 'Romance',
    titlePL: 'Romantyczne',
  },
  {
    path: '/science-fiction',
    title: 'Science Fiction',
    titlePL: 'Science Fiction',
  },
  {
    path: '/tv-movie',
    title: 'TV Movie',
    titlePL: 'Filmy TV',
  },
  {
    path: '/thriller',
    title: 'Thriller',
    titlePL: 'Thriller',
  },
  {
    path: '/war',
    title: 'War',
    titlePL: 'Wojenne',
  },
  {
    path: '/western',
    title: 'Western',
    titlePL: 'Western',
  },
];

const Categories = ({ languageSite }) => {
  const catList = categoriesList.map((movie, i) => (
    <li className="categories_item" key={i}>
      <NavLink
        to={movie.path}
        exact
        className="categories__link"
        activeClassName="categories__selected"
      >
        {languageSite === 'pl-PL' ? movie.titlePL : movie.title}
      </NavLink>
    </li>
  ));
  return (
    <div className="categories">
      <p className="categories__title">{languageSite === 'pl-PL' ? 'Kategorie' : 'Categories'} </p>
      <ul className="categories__list">{catList}</ul>
    </div>
  );
};

export default Categories;
