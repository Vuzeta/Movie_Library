import React from 'react';
import './Overview.scss';

const Overview = ({ overview }) => {
  return (
    <div className="overview">
      <p className="overview__description">{overview}</p>
    </div>
  );
};

export default Overview;
