import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import Season from "./pages/Season";
import { fetchData } from "./utils";

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getData("melin")
  }, []);

  const getData = (movieName)=>{
	fetchData(movieName).then((data) => setMovie(data));
  }
  //   console.log("movie", movie.image.original);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index movie={movie} getData={getData} />
          </Route>
          <Route path="/season" exact>
            <Season movie={movie} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
