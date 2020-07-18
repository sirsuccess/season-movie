import React from "react"

export default function SeachResult({movie, index, handleRedirect}) {
    return(
        <li onClick={() => handleRedirect(index)}>
        <div className="searchImg">
          <img src={movie[1][0].image.medium} alt="movie poster" />
        </div>
        <div className="search-item">
          <div>{movie[1][0].name}</div>
          <div className="search-season">Season {index + 1}</div>
        </div>
      </li>
    )
}