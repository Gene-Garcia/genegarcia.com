import React, { useContext, useEffect } from "react";

// Context
import AppBarContext from "../../../../../context/AppBarContext";

// MUI
import { Typography } from "@material-ui/core";

function Home() {
  // Context for link active state
  const { setLinkState } = useContext(AppBarContext);
  useEffect(() => {
    setLinkState((prev) => ({ ...(prev = false), HOME: true }));
  }, []);

  return <Typography variant="h1">Home</Typography>;
}

export default Home;
