import React from "react";

// Router
import { Link } from "react-router-dom";

// Constants
import routeConstants from "../../../shared/routes";

// Styles
import "./AppBar.css";

// MUI
import { Button } from "@material-ui/core";

function GenerateLinks() {
  let links = [];

  for (const [k, v] of Object.entries(routeConstants)) {
    links.push(
      <div className="app-bar-link">
        <Link to={v.PATH} key={k} className="app-bar-item">
          {v.NAME}
        </Link>
      </div>
    );
  }

  return links;
}

function AppBar() {
  return <div className="app-bar">{GenerateLinks()}</div>;
}

export default AppBar;
