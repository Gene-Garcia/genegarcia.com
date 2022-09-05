import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

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
    </Container>
  );
}
export default Certifications;
