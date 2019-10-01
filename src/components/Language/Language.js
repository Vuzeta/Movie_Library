import React from 'react';
import './Language.scss';

import usFlag from '../../assets/us.svg';
import plFlag from '../../assets/poland.svg';

const Language = ({ changeLanguage }) => {
  return (
    <div className="language">
      <img
        src={usFlag}
        alt="US Flag"
        className="language__logo"
        onClick={changeLanguage}
        data-language="en-US"
      />
      <img
        src={plFlag}
        alt="Poland Flag"
        className="language__logo"
        onClick={changeLanguage}
        data-language="pl-PL"
      />
    </div>
  );
};

export default Language;
