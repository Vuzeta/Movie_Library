import React from 'react';
import './Starbox.scss';

import StarRatings from 'react-star-ratings';

const Starbox = ({ ratio }) => {
  return (
    <div className="starbox">
      <StarRatings
        rating={ratio}
        starRatedColor="hsl(193, 73%, 58%)"
        starEmptyColor="hsl(223, 14%, 60%)"
        numberOfStars={5}
        starDimension="25px"
        starSpacing="2px"
        name="rating"
      />
      <span className="starbox__ratio">{ratio.toFixed(1)} / 5</span>
    </div>
  );
};

export default Starbox;
