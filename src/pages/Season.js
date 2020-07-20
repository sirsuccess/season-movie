import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { groupBy } from "../utils";
import Back from "../components/Back";
import Modal from "../components/Modal";
import SeasonDisplay from "../components/SeasonDisplay";

const Season = ({ movie, location }) => {
  const [season, setSeason] = useState(location.state);
  const [isOpen, setIsOpen] = useState(false);

  const { _embedded: { episodes = [] } = "" } = movie;

  const seasons = Object.entries(groupBy(episodes, "season"));

  const option = seasons.map((item, index) => {
    return (
      <option value={index} key={index}>
        {" "}
        Season {index + 1}
      </option>
    );
  });

  useEffect(() => {
    //redirect if undefined
    if (seasons[season][1] === "undefined") {
      return <Redirect to="/" />;
    }
  });

  const handleChangeSeason = (evt) => {
    const value = Number(evt.target.value);
    setSeason(value);
  };

  //toggle modal
  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="season-container">
      <h1 className="season-header" onClick={onClose}>
        {movie.name} Season {season + 1}
      </h1>
      <div className="subHead">
        <Back />
        <div onChange={handleChangeSeason} name="sort">
          Filter: <select>{option}</select>
        </div>
      </div>
      {isOpen && <Modal onClose={onClose} />}
       <SeasonDisplay seasons={seasons} season={season} onClose={onClose} />
    </div>
  );
};

export default withRouter(Season);
