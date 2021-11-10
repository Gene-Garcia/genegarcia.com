import React from "react";
import { useEffect } from "react/cjs/react.development";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import { ProjectCard } from "../utils/Cards";

// project data
import data from "../utils/data";

function Portfolio() {
  // navbar context
  const { setLinkState } = useNavbar();

  //
  useEffect(() => {
    setLinkState((prev) => {
      Object.keys(prev).forEach((k) => (prev[k] = false));
      return { ...prev, PORTFOLIO: true };
    });
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
