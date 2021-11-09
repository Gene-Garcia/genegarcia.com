import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function Papers() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("PAPERS");
  }, []);

  return (
    <>
      <h1>Papers</h1>
    </>
  );
}

export default Papers;
