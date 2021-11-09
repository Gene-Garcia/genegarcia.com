import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function Home() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("HOME")
  }, []);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;
