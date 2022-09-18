import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

import experienceData, {
  sortedData as experienceSortedData,
} from "../utils/data";
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

      {/* <div className="space-y-12">
        {Object.entries(experienceData).map(([k, v]) => (
          <Group key={k} name={v.name} data={v.sections} />
        ))}
      </div> */}

      <div className="space-y-3">
        {Object.entries(experienceSortedData).map(([k, v], i) => (
          <TimelineGroup data={v} key={k} visible={i % 2 == 0} />
        ))}
      </div>
    </Container>
  );
}
export default Experience;

const TimelineGroup = ({ visible = true, data }) => {
  return (
    <div className="flex flex-row gap-4">
      <Content data={data} visible={!visible} reversed={true} />
      <RoundWithLine />
      <Content data={data} visible={visible} reversed={false} />
    </div>
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
  visible,
  reversed,
}) => {
  return (
    <div className="grow pb-6 pt-1 w-full h-full">
      {visible && (
        <div
          className={`
      flex flex-col ${reversed ? "items-end text-right" : "items-start"} gap-6`}
        >
          <p className="font-semibold text-neutral-600">{date}</p>

          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="font-medium text-neutral-800">{organization}</p>
          </div>

          <p>{description}</p>

          <div className="flex flex-row flex-wrap gap-12 text-left">
            {outputs.length > 0 && (
              <MilestoneList title="Outputs" list={outputs} />
            )}
            {achievements.length > 0 && (
              <MilestoneList title="Achievements" list={achievements} />
            )}
          </div>
        </div>
      )}
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
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-2 bg-slate-300"></div>

      {/* circle */}
      <div className="shrink-0 w-4 h-4 rounded-full bg-accent/80"></div>

      {/* line */}
      <div className="grow shrink w-0.5 min-h-[3.5cm] h-full bg-slate-300"></div>
    </div>
  );
};
