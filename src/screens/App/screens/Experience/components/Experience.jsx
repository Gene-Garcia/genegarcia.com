import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

import experienceData from "../utils/data";
import Group from "./Group";

function Experience() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("EXPERIENCE");
  }, []);

  return (
    <Container>
      <Heading head="Experience" />

      <div className="space-y-12">
        {Object.entries(experienceData).map(([k, v]) => (
          <Group key={k} name={v.name} data={v.sections} />
        ))}
      </div>
    </Container>
  );
}
export default Experience;
