import React from 'react';
import './Actor.scss';

const Actor = ({ i, image, character, name }) => {
  return (
    <div className="actor" key={i}>
      <img src={image} alt="actor poster" className="actor__img" />
      <p className="actor__name">{`🎥 ${character}`}</p>
      <p className="actor__name">{`🎭 ${name}`}</p>
    </div>
  );
};

export default Actor;
