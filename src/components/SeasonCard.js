import React from "react";

const SeasonCard = ({ number, onClose }) => {
  let string= number.summary;

  if (number.summary.length > 100 && number.summary!==null) {
    string = number.summary.substring(3, 100) + "...";
  }
const handleShowSingleMovie=()=>{
    window.localStorage.setItem('movieEpi', JSON.stringify(number))
    onClose()
}
  return (
    <div className="season-card" onClick={handleShowSingleMovie}>
      {number.image.original!==null && <div className="season-card-imgDiv">
        <img src={number.image.medium} alt="movie poster" />
      </div>}
      <div>
        <a href={number.url}> {number.name}</a>
        <div className="search-season">
          Episode {number.number}, Aired: {number.airdate}
        </div>
        <p className="summary" dangerouslySetInnerHTML={{ __html: string}}/>
      </div>
    </div>
  );
};

export default SeasonCard;
