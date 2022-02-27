import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ItemHome from "./components/ItemHome";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=fsmVfaxUomrUerV0IyQsjLvT5PHYwd2HY26NKsva`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route path={`/HomeMore`}>
            <ItemHome data={data} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
