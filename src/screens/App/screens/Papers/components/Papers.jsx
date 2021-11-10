import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function Papers() {
  // navbar context
  const { setLinkState } = useNavbar();

  //
  useEffect(() => {
    setLinkState((prev) => {
      Object.keys(prev).forEach((k) => (prev[k] = false));
      return { ...prev, PAPERS: true };
    });
  }, []);

  return (
    <>
      <h1>Papers</h1>
    </>
  );
}

export default Papers;
