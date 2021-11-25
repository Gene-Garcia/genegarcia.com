import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

import schoolData from "../utils/data";
import { FocusedContainer, SubtleContainer } from "./SchoolContainer";
import SchoolContent from "./SchoolContent";

function Education() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("EDUCATION");
  }, []);

  return (
    <Container>
      <Heading head="Education" />

      <div className="mt-10 flex flex-row items-stretch gap-10">
        <SubtleContainer>
          <SchoolContent data={schoolData.SHS} />
        </SubtleContainer>

        <FocusedContainer>
          <SchoolContent data={schoolData.COLLEGE} />
        </FocusedContainer>

        <SubtleContainer>
          <SchoolContent data={schoolData.JHS} />
        </SubtleContainer>
      </div>
    </Container>
  );
}

export default Education;
