import React, { useContext, useEffect } from "react";

// Context
import AppBarContext from "../../../../../context/AppBarContext";

// MUI
import { Typography } from "@material-ui/core";

function Education() {
  // Context for link active state
  const { setLinkState } = useContext(AppBarContext);
  useEffect(() => {
    setLinkState((prev) => ({ ...(prev = false), EDUCATION: true }));
  }, []);

  return <Typography variant="h1">Education</Typography>;
}

export default Education;
