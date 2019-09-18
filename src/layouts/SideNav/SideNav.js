import React from 'react';
import './SideNav.scss';

const SideNav = () => {
  return (
    <div class="sideNav">
      <div className="sideNav__wrapper">
        <div className="logoWrapper">
          <p className="logoWrapper__logo">Movie Library</p>
        </div>
        <div className="sideNav__mainLinksWrapper">
          <ul className="mainLinks">
            <li className="mainLinks__link sideNav__link">Popularity</li>
            <li className="mainLinks__link sideNav__link">TV Shows</li>
            <li className="mainLinks__link sideNav__link">Favourite</li>
          </ul>
        </div>
        <div className="categoriesWrapper">
          <p className="categoriesWrapper__title">Categories</p>
          <ul className="categories">
            <li className="sideNav__link">Action</li>
            <li className="sideNav__link">Adventure</li>
            <li className="sideNav__link">Animation</li>
            <li className="sideNav__link">Comedy</li>
            <li className="sideNav__link">Crime</li>
            <li className="sideNav__link">Documentary</li>
            <li className="sideNav__link">Drama</li>
            <li className="sideNav__link">Family</li>
            <li className="sideNav__link">Fantasy</li>
            <li className="sideNav__link">History</li>
            <li className="sideNav__link">Horror</li>
            <li className="sideNav__link">Music</li>
            <li className="sideNav__link">Mystery</li>
            <li className="sideNav__link">Romance</li>
            <li className="sideNav__link">Science Fiction</li>
            <li className="sideNav__link">TV Movie</li>
            <li className="sideNav__link">Thriller</li>
            <li className="sideNav__link">War</li>
            <li className="sideNav__link">Western</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
