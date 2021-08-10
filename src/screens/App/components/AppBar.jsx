import React, { useContext } from "react";

// Context
import AppBarContext from "../../../context/AppBarContext";

// Router
import { Link } from "react-router-dom";

// Constants
import routeConstants from "../../../shared/routes";

// Styles
import "./AppBar.css";

function GenerateLinks(linksState) {
  let links = [];

  let classActive = "";
  for (const [k, v] of Object.entries(routeConstants)) {
    classActive = linksState[k] ? "app-bar-item active" : "app-bar-item";

    links.push(
      <div className="app-bar-link" key={k}>
        <Link to={v.PATH} className={classActive}>
          {v.NAME}
        </Link>
      </div>
    );
  }

  return links;
}

function AppBar() {
  const { linksState } = useContext(AppBarContext);

  return <div className="app-bar">{GenerateLinks(linksState)}</div>;
}

export default AppBar;
