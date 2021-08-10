import React, { useContext, useEffect } from "react";

// Context
import AppBarContext from "../../../../../context/AppBarContext";

// MUI
import { Typography } from "@material-ui/core";

function Portfolio() {
  const { setLinkState } = useContext(AppBarContext);
  useEffect(() => {
    setLinkState((prev) => ({ ...(prev = false), PORTFOLIO: true }));
  }, []);

  return <Typography variant="h1">Portfolio</Typography>;
}

export default Portfolio;
