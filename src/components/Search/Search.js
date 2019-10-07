import React from 'react';
import './Search.scss';
import magnifier from '../../assets/magnifier.svg';

const Search = ({
  handleSearchSubmit,
  focusSearch,
  searchValue,
  handleSelect,
  handleSearch,
  clickSearch,
  languageSite,
}) => {
  const searchPlaceholder = languageSite === 'pl-PL' ? '...Wyszukaj' : '...Search';

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder={focusSearch ? '' : searchPlaceholder}
          value={searchValue}
          onChange={handleSearch}
          onClick={clickSearch}
          title=""
          required
        />
        <select className="search__select" onChange={handleSelect}>
          <option value="tv">{languageSite === 'pl-PL' ? 'Seriale' : 'TV Series'}</option>
          <option value="movie">{languageSite === 'pl-PL' ? 'Filmy' : 'Movie'}</option>
        </select>
        <button className="search__button">
          <img className="search__icon" src={magnifier} alt="magnifier" />
        </button>
      </form>
    </div>
  );
};

export default Search;
