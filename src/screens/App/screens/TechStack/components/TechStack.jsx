import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function TechStack() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffectect(() => {
    activateThisLink("TECH_STACK");
  }, []);

  return (
    <>
      <h1>TechStack</h1>
    </>
  );
}

export default TechStack;
