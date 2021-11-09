import React from "react";
import { useEffect } from "react/cjs/react.development";
import useNavbar from "../../../../../context/useNavbar";

function TechStack() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("TECH_STACK");
  }, []);

  return (
    <>
      <h1>TechStack</h1>
    </>
  );
}

export default TechStack;
