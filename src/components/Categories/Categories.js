import React from 'react';

import { NavLink } from 'react-router-dom';

import './Categories.scss';

const categoriesList = [
  {
    path: '/action',
    title: 'Action',
  },
  {
    path: '/adventure',
    title: 'Adventure',
  },
  {
    path: '/animation',
    title: 'Animation',
  },
  {
    path: '/comedy',
    title: 'Comedy',
  },
  {
    path: '/crime',
    title: 'Crime',
  },
  {
    path: '/documentary',
    title: 'Documentary',
  },
  {
    path: '/drama',
    title: 'Drama',
  },
  {
    path: '/family',
    title: 'Family',
  },
  {
    path: '/fantasy',
    title: 'Fantasy',
  },
  {
    path: '/history',
    title: 'History',
  },
  {
    path: '/horror',
    title: 'Horror',
  },
  {
    path: '/music',
    title: 'Music',
  },
  {
    path: '/mystery',
    title: 'Mystery',
  },
  {
    path: '/romance',
    title: 'Romance',
  },
  {
    path: '/science-fiction',
    title: 'Science Fiction',
  },
  {
    path: '/tv-movie',
    title: 'TV Movie',
  },
  {
    path: '/thriller',
    title: 'Thriller',
  },
  {
    path: '/war',
    title: 'War',
  },
  {
    path: '/western',
    title: 'Western',
  },
];

const Categories = () => {
  const catList = categoriesList.map((movie, i) => (
    <li className="categories_item" key={i}>
      <NavLink
        to={movie.path}
        exact
        className="categories__link"
        activeClassName="categories__selected"
      >
        {movie.title}
      </NavLink>
    </li>
  ));
  return (
    <div className="categories">
      <p className="categories__title">Categories</p>
      <ul className="categories__list">{catList}</ul>
    </div>
  );
};

export default Categories;
