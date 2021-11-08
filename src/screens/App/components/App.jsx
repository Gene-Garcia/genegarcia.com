import React from "react";

// react router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// index route
import routes from "../route";
import Nav from "./Nav";

function Router() {
  return (
    <>
      <Nav />

      <Switch>
        {/* iteratively & dynamically create routes */}
        {Object.entries(routes).map(([k, v]) => (
          <Route key={k} {...v} />
        ))}
      </Switch>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
export default App;
