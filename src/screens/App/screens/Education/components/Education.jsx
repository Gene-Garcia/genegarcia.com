import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function Education() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("EDUCATION");
  }, []);

  return (
    <>
      <h1>Education</h1>
    </>
  );
}

export default Education;
