import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SeasonCard from "../components/SeasonCard";
import { groupBy } from "../utils";
import Back from "../components/Back";
import Modal from "../components/Modal";
const Season = ({ movie, location }) => {
  const [season, setSeason] = useState(location.state);
  const [isOpen, setIsOpen] = useState(false);

  const { _embedded: { episodes = [] } = "" } = movie;
  const seasons = Object.entries(groupBy(episodes, "season"));
  const option = seasons.map((item, index) => {
    return <option value={index}>Season {index + 1}</option>;
  });

  const handleChangeSeason = (evt) => {
    const value = Number(evt.target.value);
    setSeason(value);
  };

  const onClose = () => {
	setIsOpen(!isOpen);
	if(!isOpen){
		// window.localStorage.removeItem('movieEpi');
	}
  };

  return (
    <div className="season-container">
      <h1 className="season-header" onClick={onClose}>
        {movie.name} Season {season + 1}
      </h1>
      <Back />
      <div onChange={handleChangeSeason} name="sort">
        Filter:<select>{option}</select>
      </div>
      {isOpen && <Modal onClose={onClose} />}
      <div className="season-card-main">
        {seasons[season][1].map((item) => (
          <SeasonCard number={item} onClose={onClose} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(Season);