import React from "react";

// react router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// index route
import routes from "../route";

function Router() {
  return (
    <>
      <i>Nav Here</i>

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
