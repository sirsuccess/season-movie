import React from "react";
import { withRouter } from "react-router-dom";

import { groupBy } from "../utils";
import SearchResult from "./SearchResult";

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
            autoFocus="autofocus"
            type="text"
            name="item"
            placeholder="Search movie..."
          ></input>
        </div>
      </form>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        season.map((movie, index) => {
          return (
            <div key={index}>
            <SearchResult
              handleRedirect={handleRedirect}
              movie={movie}
              index={index}
            />
            </div>
          );
        })
      )}
    </div>
  );
}
export default withRouter(SearchComponent);
