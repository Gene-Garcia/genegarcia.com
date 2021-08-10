import React from "react";

// Router
import { Link } from "react-router-dom";

// Constants
import routeConstants from "../../../shared/routes";

function GenerateLinks() {
  let links = [];

  for (const [k, v] of Object.entries(routeConstants)) {
    links.push(
      <Link to={v.PATH} key={k}>
        {v.NAME}
      </Link>
    );
  }

  return links;
}

function AppBar() {
  return <div>{GenerateLinks()}</div>;
}

export default AppBar;
