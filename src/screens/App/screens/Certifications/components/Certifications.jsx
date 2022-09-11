import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import data from "../utils/data";
import Certifier from "./Certifier";

function Certifications() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("CERTIFICATIONS");
  }, []);

  return (
    <Container>
      <Heading head="Certifications" />

      <div
        className="grid content-center
      grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 
      grid-rows-none lg:grid-rows-4 xl:grid-rows-2 
      lg:grid-flow-col gap-8"
      >
        {Object.entries(data).map(([k, v]) => (
          <Certifier data={v} key={k}/>
        ))}
      </div>
    </Container>
  );
}
export default Certifications;
