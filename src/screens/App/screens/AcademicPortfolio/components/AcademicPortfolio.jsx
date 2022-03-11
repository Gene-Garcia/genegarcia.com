import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

const AcademicPortfolio = () => {
  // navbar context
  const { activateThisLink } = useNavbar();
  //
  useEffect(() => {
    activateThisLink("ACADEMIC_PORTFOLIO");
  }, []);

  return (
    <Container>
      <Heading head="Academic Portfolio" />
    </Container>
  );
};
export default AcademicPortfolio;
