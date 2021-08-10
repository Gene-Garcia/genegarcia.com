import React, { useEffect, useContext } from "react";

// Context
import AppBarContext from "../../../../../context/AppBarContext";

// MUI
import { Typography } from "@material-ui/core";

function Papers() {
  const { setLinkState } = useContext(AppBarContext);
  useEffect(() => {
    setLinkState((prev) => ({ ...(prev = false), PAPERS: true }));
  }, []);

  return <Typography variant="h1">Paper</Typography>;
}

export default Papers;
