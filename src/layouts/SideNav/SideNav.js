import React from 'react';
import './SideNav.scss';

import Categories from '../../components/Categories/Categories';
import Logo from '../../components/Logo/Logo';
import MainLinks from '../../components/MainLinks/MainLinks';

const SideNav = ({ languageSite }) => {
  return (
    <aside className="sideNav">
      <header className="sideNav__wrapper">
        <Logo />
        <MainLinks languageSite={languageSite} />
        <Categories languageSite={languageSite} />
      </header>
    </aside>
  );
};

export default SideNav;
