import React from "react";
import { useEffect } from "react/cjs/react.development";
import useNavbar from "../../../../../context/useNavbar";

function Portfolio() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("PORTFOLIO");
  }, []);

  return (
    <>
      <h1>Portfolio</h1>
    </>
  );
}

export default Portfolio;
