import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import Season from "./pages/Season";
import { fetchData } from "./utils";

function App() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData("melin");
  }, []);

  const getData = (movieName) => {
    setIsLoading(true);
    fetchData(movieName)
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        setIsError(true);
      });
  };
  //   console.log("movie", movie.image.original);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index movie={movie} getData={getData} getState={{isLoading, isError}} />
          </Route>
          <Route path="/season" exact>
            <Season movie={movie} />
          </Route>
		  <Route path="*" >
            <Index movie={movie} getData={getData} getState={{isLoading, isError}} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
