import React, { useEffect } from "react";

import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

import { sortedData as experienceSortedData } from "../utils/data";

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
        <RoundWithLine />
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

const Content = ({
  data: {
    title,
    date,
    organization,
    location,
    description,
    outputs,
    achievements,
  },
  position,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 md:gap-6 ${
        position
          ? "items-start text-left md:items-end md:text-right"
          : "items-start text-left"
      }`}
    >
      <p className="font-semibold text-neutral-600">{date}</p>

      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="font-medium text-neutral-800">{organization}</p>
      </div>

      <p className="break-words">{description}</p>

      <div
        className={`text-left flex flex-row flex-wrap gap-12 ${
          position ? "justify-end" : "justify-start"
        }`}
      >
        {outputs.length > 0 && <MilestoneList title="Outputs" list={outputs} />}
        {achievements.length > 0 && (
          <MilestoneList title="Achievements" list={achievements} />
        )}
      </div>
    </div>
  );
};

const MilestoneList = ({ title, list }) => {
  return (
    <div>
      <p className="text-accent ">{title}</p>

      <ol>
        {list.map((value, i) => (
          <li key={i}>
            {i + 1}. {value}
          </li>
        ))}
      </ol>
    </div>
  );
};

const RoundWithLine = () => {
  return (
    <>
      {" "}
      <div className="w-0.5 h-2 bg-slate-300"></div>
      {/* circle */}
      <div className="shrink-0 w-4 h-4 rounded-full bg-accent/80"></div>
      {/* line */}
      <div className="grow shrink w-0.5 min-h-[3.5cm] h-full bg-slate-300"></div>
    </>
  );
};
