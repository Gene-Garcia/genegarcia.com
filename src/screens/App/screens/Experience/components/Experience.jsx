import React, { useEffect } from "react";

import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

import { sortedData as experienceSortedData } from "../utils/data";
import RoundLine from "./utils/RoundLine";
import { Content } from "./utils/TimelineContent";

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

      <div className="space-y-2">
        {Object.entries(experienceSortedData).map(([k, v], i) => (
          <div
            className={`flex flex-row gap-1.5 md:gap-4 ${
              i % 2 == 0 ? "justify-start" : "justify-start md:justify-end"
            }`}
          >
            <ContentOrder key={v} data={v} position={i % 2 == 0} />
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Experience;

const ContentOrder = ({ position, data }) => {
  return (
    <>
      <div
        className={`hidden md:block w-full h-full
        ${position ? "order-3" : "order-1"}`}
      ></div>

      <div className="order-0 md:order-2 w-5 shrink-0 grow-0 flex flex-col items-center">
        <RoundLine />
      </div>

      <div
        className={`grow shrink w-full h-full self-end pb-10 md:pb-6 pt-1 
        ${position ? "order-1" : "order-3"}`}
      >
        <Content data={data} position={position} />
      </div>
    </>
  );
};
