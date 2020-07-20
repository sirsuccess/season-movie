import React from "react";
import SeasonCard from "./SeasonCard";

const SeasonDisplay = ({ season, seasons, onClose }) => {
  return (
    <div className="season">
      <div className="season-card-main">
        {seasons[season][1].map((item, index) => (
          <div key={index}>
              <SeasonCard number={item} onClose={onClose} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonDisplay;
