import React from "react";

// Routers
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import AppBar from "./AppBar";

// Route
import Routes from "../route";

function RouteHandler() {
  let handlers = [];

  for (const [k, v] of Object.entries(Routes)) {
    handlers.push(<Route {...v} key={k} />);
  }
  console.log(handlers);
  return handlers;
}

function App() {
  return (
    <Router>
      <AppBar />

      <h1>App</h1>

      <Switch>{RouteHandler()}</Switch>
    </Router>
  );
}

export default App;
