import React from "react";
import { withRouter } from "react-router-dom";
import { groupBy } from "../utils";

function SearchComponent({
  getData,
  episodes,
  history,
  getState: { isLoading, isError },
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    let payload;

    Array.prototype.forEach.call(formElements, (element) => {
      payload = element.value;
    });
    getData(payload);
  };

  const handleRedirect = (season) =>
    history.push({ pathname: "/season", state: season });

  const season = Object.entries(groupBy(episodes, "season"));

  return (
    <div className="search">
      <form name="search" onSubmit={handleSubmit}>
        <div className="innerSearch">
          <input
            autofocus="autofocus"
            type="text"
            name="item"
            placeholder="Search movie..."
          ></input>
        </div>
      </form>
      {isLoading ? (
        <div class="loader"></div>
      ) : (
        season.map((movie, index) => {
          return (
            <li onClick={() => handleRedirect(index)}>
              <div className="searchImg">
                <img src={movie[1][0].image.medium} alt="movie poster" />
              </div>
              <div className="search-item">
                <div>{movie[1][0].name}</div>
                <div className="search-season">Season {index + 1}</div>
              </div>
            </li>
          );
        })
      )}
    </div>
  );
}
export default withRouter(SearchComponent);
