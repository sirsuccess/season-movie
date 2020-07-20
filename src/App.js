import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import { fetchData } from "./utils";
import ErrorBoundary from "./components/ErrorBoundary";
const Season = lazy(() => import("./pages/Season"));

function App() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData("melin");
  }, []);

  //fetch data
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

  return (
    <ErrorBoundary>
      <div className="App">
        <Suspense fallback={<div className="loader" />}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Index
                  movie={movie}
                  getData={getData}
                  getState={{ isLoading, isError }}
                />
              </Route>
              <Route path="/season" exact>
                <Season movie={movie} />
              </Route>
              <Route path="*">
                <Index
                  movie={movie}
                  getData={getData}
                  getState={{ isLoading, isError }}
                />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
