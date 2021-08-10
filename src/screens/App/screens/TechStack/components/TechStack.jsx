import React, { useContext, useEffect } from "react";

// Context
import AppBarContext from "../../../../../context/AppBarContext";

// MUI
import { Typography } from "@material-ui/core";

function TechStack() {
  // Context for link active state
  const { setLinkState } = useContext(AppBarContext);
  useEffect(() => {
    setLinkState((prev) => ({ ...(prev = false), TECH_STACK: true }));
  }, []);

  return <Typography variant="h1">Technology Stack</Typography>;
}

export default TechStack;
