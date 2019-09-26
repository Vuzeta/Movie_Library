import React from 'react';
import './Crew.scss';

const Crew = ({ category, directed }) => {
  const crew = directed.map((person, i) => (
    <p key={i} className="crew__person">
      {person.name}
    </p>
  ));

  return (
    <div className="crew">
      <h2 className="crew__title">{category === 'tv' ? 'CREATED BY' : 'DIRECTED'}</h2>
      {crew}
    </div>
  );
};

export default Crew;
