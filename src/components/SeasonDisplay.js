import React from "react";
import SeasonCard from "./SeasonCard";
import InViewMonitor from "react-inview-monitor";

const SeasonDisplay = ({ season, seasons, onClose }) => {
  return (
    <div className="season">
      <div className="season-card-main">
        {seasons[season][1].map((item, index) => (
          <div key={index}>
            <InViewMonitor
              classNameNotInView="vis-hidden"
              classNameInView="animated fadeInUp"
            >
              <SeasonCard number={item} onClose={onClose} />
            </InViewMonitor>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonDisplay;
