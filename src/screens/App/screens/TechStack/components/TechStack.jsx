import React from "react";
import { useEffect } from "react/cjs/react.development";
import useNavbar from "../../../../../context/useNavbar";

function TechStack() {
  // navbar context
  const { setLinkState } = useNavbar();

  //
  useEffect(() => {
    setLinkState((prev) => {
      Object.keys(prev).forEach((k) => (prev[k] = false));
      return { ...prev, TECH_STACK: true };
    });
  }, []);

  return (
    <>
      <h1>TechStack</h1>
    </>
  );
}

export default TechStack;
