import React from "react";

import SearchComponent from "../components/Search";
import "../styles/index.css";

function App({ movie, getData, getState }) {
  const {
    name,
    url,
    premiered,
    language,
    summary,
    type,
    runtime,
    image: { original = "" } = "",
    _embedded: { episodes = [] } = "",
  } = movie;

  return (
    <div className="contain">
      <div className="index" styles={{ backgroundImage: `url(${original})` }}>
        {original && (
          <div className="movieCard">
            <div className="title">
              {name} : {episodes[episodes.length - 1].season} Seasons
            </div>
            <div className="container">
              <div className="imgDiv">
                <img src={original} alt="movie poster" />
              </div>
              <div className="movieBotom">
                <a href={url}>
                  <h1>{name}</h1>
                </a>
                <div className="movieDetails">
                  <div className="release">
                    Premiered:
                    <div className="movieDetailsTitle">{premiered}</div>
                  </div>
                  <div className="release">
                    Language:<div className="movieDetailsTitle">{language}</div>
                  </div>
                  <div className="release">
                    Type:<div className="movieDetailsTitle">{type}</div>
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
        )}
        <div>
          <SearchComponent
            getData={getData}
            episodes={episodes}
            getState={getState}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
