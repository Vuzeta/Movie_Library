import React from 'react';
import './Crew.scss';

const Crew = ({ category, directed, languageSite }) => {
  const crew = directed.map((person, i) => (
    <p key={i} className="crew__person">
      {person.name}
    </p>
  ));
  const createdBy = languageSite === 'pl-PL' ? 'TWÓRCA' : 'CREATED BY';
  const directedBy = languageSite === 'pl-PL' ? 'REŻYSERIA' : 'DIRECTED BY';

  return (
    <div className="crew">
      <h2 className="crew__title">{category === 'tv' ? createdBy : directedBy}</h2>
      {crew}
    </div>
  );
};

export default Crew;
