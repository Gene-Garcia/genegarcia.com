import React from "react";

// react router
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavbarProvider } from "../../../context/NavbarContext";

// navbar context to handle active state

// index route
import routes from "../route";
import Nav from "./Nav";

function Router() {
  return (
    <>
      <Nav />

      <div className="h-ninety">
        <Switch>
          {/* iteratively & dynamically create routes */}
          {Object.entries(routes).map(([k, v]) => (
            <Route key={k} {...v} />
          ))}
        </Switch>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarProvider>
          <Router />
        </NavbarProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
