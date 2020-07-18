import React, { useState } from "react";

const Modal = ({ onClose }) => {
  const [episode] = useState(
    JSON.parse(window.localStorage.getItem("movieEpi"))
  );
  const {
    name,
    url,
    season,
    number,
    summary,
    airdate,
    runtime,
    image: { original = "" } = "",
  } = episode;


  return (
    <div className="modalDialog" onClick={() => onClose()}>
      <div className="modal-main">
        <div title="Close" className="close" onClick={() => onClose()}>
          X
        </div>
        <div className="movieCard1">
          <a href={url}>
            <div className="title">{name}</div>
          </a>
          <div className="container3">
            <div className="imgDiv">
              <img src={original} alt="movie poster" />
            </div>
            <div className="movieBotom">
              <div className="movieDetails">
                <div className="release">
                  Season:
                  <div className="movieDetailsTitle">{season}</div>
                </div>
                <div className="release">
                  Episode:<div className="movieDetailsTitle">{number}</div>
                </div>
                <div className="release">
                Air date:<div className="movieDetailsTitle">{airdate}</div>
                </div>
                <div className="release">
                  Runtime:
                  <div className="movieDetailsTitle">{runtime} Min</div>
                </div>
              </div>
              <p
                className="summary"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
