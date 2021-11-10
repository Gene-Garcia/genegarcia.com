import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function Education() {
  // navbar context
  const { setLinkState } = useNavbar();

  //
  useEffect(() => {
    setLinkState((prev) => {
      Object.keys(prev).forEach((k) => (prev[k] = false));
      return { ...prev, EDUCATION: true };
    });
  }, []);

  return (
    <>
      <h1>Education</h1>
    </>
  );
}

export default Education;
