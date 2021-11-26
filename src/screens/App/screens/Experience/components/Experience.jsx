import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

import experienceData from "../utils/data";

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

      <div className="mt-10 space-y-12">
        {Object.entries(experienceData).map(([k, v]) =>
          v ? <Group key={k} name={v.name} data={v.sections} /> : <p>Empty</p>
        )}
      </div>
    </Container>
  );
}
export default Experience;

function Group({ name, data }) {
  return (
    <div className="w-eightfive overflow-hidden shadow-xl rounded-t-lg">
      <div className="h-36 relative transform -rotate-3 -mt-12 -ml-4">
        <div className="bg-accent w-full h-full flex items-center p-10">
          <p className="text-white font-semibold text-xl">{name}</p>
        </div>
      </div>

      <div className="space-y-8 shadow-xl z-10 rounded-b-lg p-8">
        {Object.entries(data).map(([k, v]) => (
          <ExperienceDetails key={k} content={v} />
        ))}
      </div>
    </div>
  );
}

function ExperienceDetails({
  content: {
    title,
    date,
    organization,
    location,
    organizationLogo,
    description,
    outputs,
    achievements,
  },
}) {
  const List = ({ name, items }) => {
    return items.length > 0 ? (
      <div>
        <p className="text-accent">{name}</p>
        {items.map((e, i) => (
          <p key={i} className="">
            {i + 1}. {e}
          </p>
        ))}
      </div>
    ) : (
      <></>
    );
  };

  return (
    <div className="relative z-50 flex flex-row gap-10">
      <div className="w-20 h-20 rounded-full p-3 shadow bg-gray-100 flex justify-center items-center flex-shrink-0">
        <img src={organizationLogo} alt={title} className="w-full h-full" />
      </div>

      <div className="w-3/4 space-y-5 flex-grow">
        <div className="">
          <h3 className="text-2xl font-semibold text-black uppercase">
            {title}
          </h3>

          <p>
            <span className="text-lg font-medium text-accent">
              {organization}
            </span>
            , <span className="font-regular text-gray-600">{location}</span>
          </p>

          <p className="text-md font-medium text-gray-500">{date}</p>
        </div>

        <p className="leading-7 text-body-color">{description}</p>

        <div className="flex flex-row gap-20 text-gray-700 text-sm">
          <List name="Output" items={outputs} />
          <List name="Achievements" items={achievements} />
        </div>
      </div>
    </div>
  );
}
