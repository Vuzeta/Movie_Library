import React from 'react';
import './Cast.scss';
import noImg from '../../assets/noImg.jpg';

const Cast = ({ cast }) => {
  const actors = cast.map((actor, i) => {
    const name = actor.name,
      image = actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : noImg,
      character = actor.character;
    return (
      <div className="cast__actor" key={i}>
        <img src={image} alt="actor poster" className="cast__img" />
        <p className="cast__name">{character}</p>
        <p className="cast__name">{name}</p>
      </div>
    );
  });

  return (
    <div className="cast">
      <h2 className="cast__title">CAST</h2>
      <div className="cast__box">{actors}</div>
    </div>
  );
};

export default Cast;
