import React from 'react';
import './Cast.scss';
import noImg from '../../assets/noImg.jpg';
import Actor from '../Actor/Actor';

const Cast = ({ cast, languageSite }) => {
  const actors = cast.map((actor, i) => {
    const name = actor.name,
      image = actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : noImg,
      character = actor.character;
    return <Actor key={i} image={image} character={character} name={name} />;
  });

  return (
    <div className="cast">
      <h2 className="cast__title">{languageSite === 'pl-PL' ? 'AKTORZY' : 'CAST'}</h2>
      <div className="cast__box">{actors}</div>
    </div>
  );
};

export default Cast;
