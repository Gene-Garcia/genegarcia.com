import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import { ProjectCard } from "../utils/Cards";

// project data
import data from "../utils/data";

function Portfolio() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("PORTFOLIO");
  }, []);

  return (
    <Container>
      <Heading head="Portfolio" />

      <div className="my-10 flex flex-col gap-6">
        {Object.entries(data).map(([k, v]) => (
          <ProjectCard key={k} data={v} />
        ))}
      </div>
    </Container>
  );
}

export default Portfolio;
