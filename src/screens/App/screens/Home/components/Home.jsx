import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function Home() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("HOME");
  }, []);

  return (
    <div className="flex flex-row items-center justify-center h-full">
      <div className="w-2/5 bg-accent">a</div>

      <div className="w-2/5 bg-my-green">a</div>
    </div>
  );
}

export default Home;
